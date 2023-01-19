import { decodeToken } from "../helpers/common";

const authProvider = {
  isAuthenticated: false,
  isAuth() {
    let userString = localStorage.getItem("user");
    let currentUser = userString ? JSON.parse(userString) : undefined;
    if (currentUser) {
      return !decodeToken(currentUser.token);
    }
    return false;
  },
  logOut() {
    localStorage.clear();
  },
  userInfo() {
    let userString = localStorage.getItem("user");
    let currentUser = userString ? JSON.parse(userString) : undefined;
    return currentUser.user;
  },
};

export { authProvider };
