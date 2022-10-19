// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface AdmExport {
  ids: Array;
  export_config: boolean;
}

export function isAdmExport(v: any): v is AdmExport {
  return (
    (v['ids'] && isArray(v['ids'])) &&
    ((typeof v['export_config']) === 'boolean')
  );
}