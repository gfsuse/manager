package com.neu.core

import com.typesafe.scalalogging.LazyLogging
import org.apache.pekko.actor.ActorSystem
import org.apache.pekko.http.scaladsl.model.*
import org.apache.pekko.http.scaladsl.settings.ConnectionPoolSettings
import org.apache.pekko.http.scaladsl.{ ConnectionContext, Http, HttpsConnectionContext }
import org.apache.pekko.stream.Materializer
import org.apache.pekko.stream.scaladsl.{ Sink, Source }

import java.security.SecureRandom
import java.security.cert.X509Certificate
import javax.net.ssl.{ SSLContext, SSLEngine, TrustManager, X509TrustManager }
import scala.concurrent.{ ExecutionContext, Future }
import scala.util.{ Failure, Success }

trait ClientSslConfig extends LazyLogging {

  implicit lazy val httpsContext: HttpsConnectionContext = ConnectionContext.httpsClient {
    (host, port) =>
      val engine: SSLEngine = sslContext.createSSLEngine(host, port)
      engine.setUseClientMode(true)
      engine
  }

  implicit lazy val sslContext: SSLContext = {
    val context = SSLContext.getInstance("TLS")
    context.init(null, Array[TrustManager](new DummyTrustManager), new SecureRandom)
    context
  }

  private final val SENSITIVE_HEADER = Set("X-Auth-Token", "Authorization")

  def sendReceiver(using
    system: ActorSystem,
    materializer: Materializer,
    executionContext: ExecutionContext
  ): HttpRequest => Future[HttpResponse] = { (request: HttpRequest) =>
    val poolSettings = ConnectionPoolSettings(system)

    logger.info(s"Sending Request\n${maskSensitiveInfo(request.toString)}")

    val connectionPool = if (request.uri.scheme == "https") {
      logger.debug("Using HTTPS connection pool")
      Http().cachedHostConnectionPoolHttps[HttpRequest](
        request.uri.authority.host.toString,
        request.uri.effectivePort,
        connectionContext = httpsContext,
        settings = poolSettings
      )
    } else {
      logger.debug("Using HTTP connection pool")
      Http().cachedHostConnectionPool[HttpRequest](
        request.uri.authority.host.toString,
        request.uri.effectivePort,
        settings = poolSettings
      )
    }

    Source
      .single(request -> request)
      .via(connectionPool)
      .runWith(Sink.head)
      .flatMap {
        case (Success(response: HttpResponse), _) =>
          logger.info(s"Received Response - Success\n$response")
          Future.successful(response)
        case (Failure(exception), _)              =>
          logger.info(s"Received Response - Failure\n$exception")
          Future.failed(exception)
        case (Success(unexpected), _)             =>
          logger.info(s"Received Response - Unexpected Exception\n$unexpected")
          Future.failed(new Exception(s"Unexpected response from HTTP transport: $unexpected"))
      }
  }

  private def maskSensitiveInfo(str: String): String =
    SENSITIVE_HEADER.foldLeft(str) { (acc, header) =>
      val regex = s"($header:\\s*)([^\\s,]+)".r
      regex.replaceAllIn(acc, m => s"${m.group(1)}${maskToken(m.group(2))}")
    }

  private def maskToken(token: String): String = s"${token.take(4)}****${token.takeRight(4)}"

  private def logHeaders(headers: Seq[HttpHeader]): String =
    headers
      .map(h =>
        s"${h.name}: ${
            if (SENSITIVE_HEADER.contains(h.name)) maskToken(h.value)
            else h.value
          }"
      )
      .mkString(", ")

  private class DummyTrustManager extends X509TrustManager {

    def isClientTrusted(cert: Array[X509Certificate]): Boolean = true

    def isServerTrusted(cert: Array[X509Certificate]): Boolean = true

    override def getAcceptedIssuers: Array[X509Certificate] = Array.empty

    override def checkClientTrusted(x509Certificates: Array[X509Certificate], s: String): Unit = {}

    override def checkServerTrusted(x509Certificates: Array[X509Certificate], s: String): Unit = {}
  }
}
