// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface ContainerWrap {
  workloads: Array;
}

export function isContainerWrap(v: any): v is ContainerWrap {
  return v['workloads'] && isArray(v['workloads']);
}
