// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { CustomCheck, isCustomCheck } from './CustomCheck';

export interface CustomChecks {
  scripts: ReadonlyArray<CustomCheck>;
}

export function isCustomChecks(v: any): v is CustomChecks {
  return (
    Array.isArray(v['scripts']) &&
    v['scripts'].every(elmt => elmt && isCustomCheck(elmt))
  );
}
