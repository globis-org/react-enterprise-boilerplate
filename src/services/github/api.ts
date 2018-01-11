import axios from 'axios';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

export default class GitHubApi {
  private API_CONFIG: ApiConfig;
  private DAFAULT_API_CONFIG: ApiConfig = {
    baseURL: 'https://api.github.com',
    timeout: 1000,
  };

  constructor(config?: ApiConfig) {
    this.API_CONFIG = Object.assign({}, config, this.DAFAULT_API_CONFIG);
  }

  getOrgMembers = async(orgName: string) => {
    const instance = axios.create(this.API_CONFIG);
    const response =  await instance.get(`/orgs/${orgName}/members`);
    return response;
  }
}
