export interface RemoteRepository {
  nickname: string;
  provider: string;
  comment: string;
  enable: boolean;
  github_configuration: GithubConfiguration;
}

export interface GithubConfiguration {
  repository_owner_username: string;
  repository_name: string;
  repository_branch_name: string;
  personal_access_token_email: string;
  personal_access_token_committer_name: string;
  personal_access_token?: string;
}

export interface RemoteRepositoryWrapper {
  config: RemoteRepository;
}

export interface RemoteExportOptions {
  remote_repository_nickname: string;
  file_path?: string;
  comment?: string;
}

export interface RemoteExportOptionsWrapper {
  export_options: RemoteExportOptionsConfig;
}

export interface RemoteExportOptionsConfig {
  policy_mode: string;
  profile_mode: string;
  remote_repository_nickname: string;
  export_mode: string;
  file_path?: string;
  comment?: string;
}
