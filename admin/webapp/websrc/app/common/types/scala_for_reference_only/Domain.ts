// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface Domain {
  source?: string;
  destination?: string;
}

export function isDomain(v: any): v is Domain {
  return (
    (!v['source'] || typeof v['source'] === 'string') &&
    (!v['destination'] || typeof v['destination'] === 'string')
  );
}
