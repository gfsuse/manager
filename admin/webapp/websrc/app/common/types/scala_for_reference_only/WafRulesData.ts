// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { WafRule, isWafRule } from './WafRule';

export interface WafRulesData {
  rules: ReadonlyArray<WafRule>;
}

export function isWafRulesData(v: any): v is WafRulesData {
  return (
    Array.isArray(v['rules']) &&
    v['rules'].every(elmt => elmt && isWafRule(elmt))
  );
}
