// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { SnifferParam, isSnifferParam } from './SnifferParam';

export interface SnifferParamWarp {
  sniffer: SnifferParam;
}

export function isSnifferParamWarp(v: any): v is SnifferParamWarp {
  return v['sniffer'] && isSnifferParam(v['sniffer']);
}
