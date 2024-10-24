// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import {
  ComplianceProfileEntry,
  isComplianceProfileEntry,
} from './ComplianceProfileEntry';

export interface ComplianceProfileEntryData {
  entry: ComplianceProfileEntry;
}

export function isComplianceProfileEntryData(
  v: any
): v is ComplianceProfileEntryData {
  return v['entry'] && isComplianceProfileEntry(v['entry']);
}
