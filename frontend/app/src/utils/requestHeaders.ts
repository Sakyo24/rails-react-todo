import axios from 'axios';
import { getCookieToken } from './cookie';

export const setRequestHeaders = (accountType: "user" | "admin") => {
  const cookieToken = getCookieToken(accountType);
	axios.defaults.headers.common["access-token"] = cookieToken["accessToken"];
	axios.defaults.headers.common["client"] = cookieToken["client"];
	axios.defaults.headers.common["uid"] = cookieToken["uid"];
	axios.defaults.headers.common["expiry"] = cookieToken["expiry"];
};
