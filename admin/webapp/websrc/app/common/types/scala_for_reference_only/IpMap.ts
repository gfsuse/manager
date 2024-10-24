// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { IpGeo, isIpGeo } from './IpGeo';

export interface IpMap {
  ip_map: { [key: string]: IpGeo };
}

export function isIpMap(v: any): v is IpMap {
  return (
    typeof v['ip_map'] == 'object' &&
    Object.keys(v['ip_map']).every(
      key =>
        typeof key === 'string' && v['ip_map'][key] && isIpGeo(v['ip_map'][key])
    )
  );
}
