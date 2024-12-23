// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { SsoServer, isSsoServer } from './SsoServer';

export interface RedirectData {
  redirect: SsoServer;
}

export function isRedirectData(v: any): v is RedirectData {
  return v['redirect'] && isSsoServer(v['redirect']);
}
