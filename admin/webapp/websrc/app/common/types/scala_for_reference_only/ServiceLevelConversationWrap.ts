// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface ServiceLevelConversationWrap {
  workload_id: string;
  peerEndpoint: string;
  service: string;
  policy_mode: string;
  workload: string;
  bytes: number;
  sessions: number;
  severity?: string;
  policy_action: string;
  event_type?: string;
  protocols?: Array;
  applications?: Array;
  ports?: Array;
  children: Array;
}

export function isServiceLevelConversationWrap(
  v: any
): v is ServiceLevelConversationWrap {
  return (
    typeof v['workload_id'] === 'string' &&
    typeof v['peerEndpoint'] === 'string' &&
    typeof v['service'] === 'string' &&
    typeof v['policy_mode'] === 'string' &&
    typeof v['workload'] === 'string' &&
    typeof v['bytes'] === 'number' &&
    typeof v['sessions'] === 'number' &&
    (!v['severity'] || typeof v['severity'] === 'string') &&
    typeof v['policy_action'] === 'string' &&
    (!v['event_type'] || typeof v['event_type'] === 'string') &&
    (!v['protocols'] || (v['protocols'] && isArray(v['protocols']))) &&
    (!v['applications'] || (v['applications'] && isArray(v['applications']))) &&
    (!v['ports'] || (v['ports'] && isArray(v['ports']))) &&
    v['children'] &&
    isArray(v['children'])
  );
}
