import axiosClient from "./axiosClient";
const signupApi = {
  signup() {
    const url = "/generateMnemoricPhrase";
    return axiosClient.get(url);
  },
};

export default signupApi;
