// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Error, isError } from './Error';
import {
  SystemConfig4Dashboard,
  isSystemConfig4Dashboard,
} from './SystemConfig4Dashboard';

export interface SystemConfig4DashboardWrap {
  config: SystemConfig4Dashboard;
  error?: Error;
}

export function isSystemConfig4DashboardWrap(
  v: any
): v is SystemConfig4DashboardWrap {
  return (
    v['config'] &&
    isSystemConfig4Dashboard(v['config']) &&
    (!v['error'] || (v['error'] && isError(v['error'])))
  );
}
