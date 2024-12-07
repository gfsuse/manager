// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';
import { Metrics, isMetrics } from './Metrics';
import { Score, isScore } from './Score';

export interface ScoreOutput2 {
  score: Score;
  metrics: Metrics;
  ingress: Array;
  egress: Array;
}

export function isScoreOutput2(v: any): v is ScoreOutput2 {
  return (
    v['score'] &&
    isScore(v['score']) &&
    v['metrics'] &&
    isMetrics(v['metrics']) &&
    v['ingress'] &&
    isArray(v['ingress']) &&
    v['egress'] &&
    isArray(v['egress'])
  );
}
