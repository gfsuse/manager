// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface ScoreOutput {
  newServiceModeScore: Error | number;
  serviceModeScore: Error | number;
  serviceModeScoreBy100: Error | number;
  exposureScore: Error | number;
  exposureScoreBy100: Error | number;
  privilegedContainerScore: Error | number;
  runAsRoot: Error | number;
  admissionRuleScore: Error | number;
  vulnerabilityScore: Error | number;
  vulnerabilityScoreBy100: Error | number;
  securityRiskScore: Error | number;
}

export function isScoreOutput(v: any): v is ScoreOutput {
  return (
    ((v['newServiceModeScore'] && isError(v['newServiceModeScore'])) ||
      typeof v['newServiceModeScore'] === 'number') &&
    ((v['serviceModeScore'] && isError(v['serviceModeScore'])) ||
      typeof v['serviceModeScore'] === 'number') &&
    ((v['serviceModeScoreBy100'] && isError(v['serviceModeScoreBy100'])) ||
      typeof v['serviceModeScoreBy100'] === 'number') &&
    ((v['exposureScore'] && isError(v['exposureScore'])) ||
      typeof v['exposureScore'] === 'number') &&
    ((v['exposureScoreBy100'] && isError(v['exposureScoreBy100'])) ||
      typeof v['exposureScoreBy100'] === 'number') &&
    ((v['privilegedContainerScore'] &&
      isError(v['privilegedContainerScore'])) ||
      typeof v['privilegedContainerScore'] === 'number') &&
    ((v['runAsRoot'] && isError(v['runAsRoot'])) ||
      typeof v['runAsRoot'] === 'number') &&
    ((v['admissionRuleScore'] && isError(v['admissionRuleScore'])) ||
      typeof v['admissionRuleScore'] === 'number') &&
    ((v['vulnerabilityScore'] && isError(v['vulnerabilityScore'])) ||
      typeof v['vulnerabilityScore'] === 'number') &&
    ((v['vulnerabilityScoreBy100'] && isError(v['vulnerabilityScoreBy100'])) ||
      typeof v['vulnerabilityScoreBy100'] === 'number') &&
    ((v['securityRiskScore'] && isError(v['securityRiskScore'])) ||
      typeof v['securityRiskScore'] === 'number')
  );
}
