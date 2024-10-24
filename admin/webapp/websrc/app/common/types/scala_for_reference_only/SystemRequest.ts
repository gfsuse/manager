// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import {
  SystemRequestContent,
  isSystemRequestContent,
} from './SystemRequestContent';

export interface SystemRequest {
  request: SystemRequestContent;
}

export function isSystemRequest(v: any): v is SystemRequest {
  return v['request'] && isSystemRequestContent(v['request']);
}
