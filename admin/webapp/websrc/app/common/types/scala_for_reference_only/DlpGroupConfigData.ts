// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { DlpGroupConfig, isDlpGroupConfig } from './DlpGroupConfig';

export interface DlpGroupConfigData {
  config: DlpGroupConfig;
}

export function isDlpGroupConfigData(v: any): v is DlpGroupConfigData {
  return v['config'] && isDlpGroupConfig(v['config']);
}
