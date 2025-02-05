// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface AdmState {
  enable: boolean;
  mode: string;
  default_action: string;
  adm_client_mode: string;
  adm_client_mode_options: { [key: string]: string };
}

export function isAdmState(v: any): v is AdmState {
  return (
    typeof v['enable'] === 'boolean' &&
    typeof v['mode'] === 'string' &&
    typeof v['default_action'] === 'string' &&
    typeof v['adm_client_mode'] === 'string' &&
    typeof v['adm_client_mode_options'] == 'object' &&
    Object.keys(v['adm_client_mode_options']).every(
      key =>
        typeof key === 'string' &&
        typeof v['adm_client_mode_options'][key] === 'string'
    )
  );
}
