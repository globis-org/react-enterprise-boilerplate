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
    this.API_CONFIG = { ...config, ...this.DAFAULT_API_CONFIG };
  }

  public getOrgMembers = async(orgName: string) => {
    const instance = axios.create(this.API_CONFIG);
    const response = await instance.get(`/orgs/${orgName}/members`);
    const data = response.data;

    return data;
  }

  public searchUsers = async(query: string) => {
    const escapedQuery = encodeURIComponent(query);
    const instance = axios.create(this.API_CONFIG);
    const response = await instance.get(`/search/users?q=${escapedQuery}`);
    const items = response.data.items;

    return items;
  }
}
