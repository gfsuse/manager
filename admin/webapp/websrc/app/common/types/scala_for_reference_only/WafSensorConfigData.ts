// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { WafSensorConfig, isWafSensorConfig } from './WafSensorConfig';

export interface WafSensorConfigData {
  config: WafSensorConfig;
}

export function isWafSensorConfigData(v: any): v is WafSensorConfigData {
  return (
    (v['config'] && isWafSensorConfig(v['config']))
  );
}