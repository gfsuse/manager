// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface Eula {
  accepted: boolean;
}

export function isEula(v: any): v is Eula {
  return typeof v['accepted'] === 'boolean';
}
