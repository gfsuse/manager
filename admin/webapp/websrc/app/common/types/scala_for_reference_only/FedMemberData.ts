// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface FedMemberData {
  fed_role: string;
}

export function isFedMemberData(v: any): v is FedMemberData {
  return typeof v['fed_role'] === 'string';
}
