import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export default class GitHubApi {
  static getOrgMembers = async(orgName: string) => {
    const API_END_POINT = `${BASE_URL}/orgs/${orgName}/members`;
    // TODO:
    // throw errors when API returns errror
    return await axios(API_END_POINT);
  }
}
