// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface ViolationWrap {
  violations: Array;
}

export function isViolationWrap(v: any): v is ViolationWrap {
  return v['violations'] && isArray(v['violations']);
}
