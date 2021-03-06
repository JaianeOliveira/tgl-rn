import api from "global/constants/api";

const authServices = () => {
  async function loginUser(data: { email: string; password: string }) {
    return api.post("/login", data).then((response) => {
      return response.data;
    });
  }

  async function resetPassword(email: string) {
    return api
      .post("/reset", { email: email })
      .then((response) => response.data);
  }

  async function changePassword(token: string, password: string) {
    return api
      .post(`/reset/${token}`, { password: password })
      .then((response) => response);
  }

  return { loginUser, resetPassword, changePassword };
};

export default authServices;
