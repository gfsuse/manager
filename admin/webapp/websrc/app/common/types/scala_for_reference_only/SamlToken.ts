// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface SamlToken {
  token: string;
}

export function isSamlToken(v: any): v is SamlToken {
  return typeof v['token'] === 'string';
}
