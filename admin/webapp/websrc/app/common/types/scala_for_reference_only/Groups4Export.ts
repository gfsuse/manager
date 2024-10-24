// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface Groups4Export {
  groups: Array;
  policy_mode?: string;
}

export function isGroups4Export(v: any): v is Groups4Export {
  return (
    v['groups'] &&
    isArray(v['groups']) &&
    (!v['policy_mode'] || typeof v['policy_mode'] === 'string')
  );
}
