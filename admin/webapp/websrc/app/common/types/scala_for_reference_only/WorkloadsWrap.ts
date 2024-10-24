// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';
import { Error, isError } from './Error';

export interface WorkloadsWrap {
  workloads: Array;
  error?: Error;
}

export function isWorkloadsWrap(v: any): v is WorkloadsWrap {
  return (
    v['workloads'] &&
    isArray(v['workloads']) &&
    (!v['error'] || (v['error'] && isError(v['error'])))
  );
}
