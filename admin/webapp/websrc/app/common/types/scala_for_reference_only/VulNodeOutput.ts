// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface VulNodeOutput {
  nodeHighVuls: number;
  nodeMedVuls: number;
  totalHost: number;
}

export function isVulNodeOutput(v: any): v is VulNodeOutput {
  return (
    typeof v['nodeHighVuls'] === 'number' &&
    typeof v['nodeMedVuls'] === 'number' &&
    typeof v['totalHost'] === 'number'
  );
}
