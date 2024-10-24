// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface ResponseRules {
  after?: number;
  rules: Array;
}

export function isResponseRules(v: any): v is ResponseRules {
  return (
    (!v['after'] || typeof v['after'] === 'number') &&
    v['rules'] &&
    isArray(v['rules'])
  );
}
