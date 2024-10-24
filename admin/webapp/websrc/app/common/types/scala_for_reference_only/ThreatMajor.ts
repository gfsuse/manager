// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { DateTime, isDateTime } from './DateTime';

export interface ThreatMajor {
  name: string;
  reported_timestamp: number;
  reported_at: DateTime;
  level: string;
  client_workload_id: string;
  client_workload_name: string;
  client_workload_domain: string;
  server_workload_id: string;
  server_workload_name: string;
  server_workload_domain: string;
  client_port: number;
  server_port: number;
  server_conn_port: number;
  client_ip: string;
  server_ip: string;
  target: string;
  application: string;
}

export function isThreatMajor(v: any): v is ThreatMajor {
  return (
    typeof v['name'] === 'string' &&
    typeof v['reported_timestamp'] === 'number' &&
    v['reported_at'] &&
    isDateTime(v['reported_at']) &&
    typeof v['level'] === 'string' &&
    typeof v['client_workload_id'] === 'string' &&
    typeof v['client_workload_name'] === 'string' &&
    typeof v['client_workload_domain'] === 'string' &&
    typeof v['server_workload_id'] === 'string' &&
    typeof v['server_workload_name'] === 'string' &&
    typeof v['server_workload_domain'] === 'string' &&
    typeof v['client_port'] === 'number' &&
    typeof v['server_port'] === 'number' &&
    typeof v['server_conn_port'] === 'number' &&
    typeof v['client_ip'] === 'string' &&
    typeof v['server_ip'] === 'string' &&
    typeof v['target'] === 'string' &&
    typeof v['application'] === 'string'
  );
}
