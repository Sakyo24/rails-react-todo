export const setCookieToken = (accessToken: string, client: string, uid: string, expiry: string, accountType: 'user' | 'admin'): void => {
  localStorage.setItem(`${accountType}AccessToken`, accessToken);
  localStorage.setItem(`${accountType}Client`, client);
  localStorage.setItem(`${accountType}Uid`, uid);
  localStorage.setItem(`${accountType}Expiry`, expiry);
};

interface CookieToken {
  accessToken: string | null;
  client: string | null;
  uid: string | null;
  expiry: string | null;
};

export const getCookieToken = (accountType: 'user' | 'admin'): CookieToken => {
  return {
    accessToken: localStorage.getItem(`${accountType}AccessToken`),
    client: localStorage.getItem(`${accountType}Client`),
    uid: localStorage.getItem(`${accountType}Uid`),
    expiry: localStorage.getItem(`${accountType}Expiry`)
  };
}

export const removeCookieToken = (accountType: 'user' | 'admin'): void => {
  localStorage.removeItem(`${accountType}AccessToken`);
  localStorage.removeItem(`${accountType}Client`);
  localStorage.removeItem(`${accountType}Uid`);
  localStorage.removeItem(`${accountType}Expiry`);
};
