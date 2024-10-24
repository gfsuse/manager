// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { WafRule, isWafRule } from './WafRule';

export interface WafSensor {
  name: string;
  comment: string;
  groups: ReadonlyArray<string>;
  rules: ReadonlyArray<WafRule>;
}

export function isWafSensor(v: any): v is WafSensor {
  return (
    typeof v['name'] === 'string' &&
    typeof v['comment'] === 'string' &&
    Array.isArray(v['groups']) &&
    v['groups'].every(elmt => typeof elmt === 'string') &&
    Array.isArray(v['rules']) &&
    v['rules'].every(elmt => elmt && isWafRule(elmt))
  );
}
