import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export interface ApiError extends Error {
  response: any;
  message: string;
}

export default class GitHubApi {
  static getOrgMembers = async(orgName: string) => {
    const API_END_POINT = `${BASE_URL}/orgs/${orgName}/members`;
    // TODO:
    // throw errors when API returns errror
    const instance = axios.create({
      timeout: 1,
    });
    return await instance.get(API_END_POINT);
  }
}
