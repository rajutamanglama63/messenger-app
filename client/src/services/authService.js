import axios from "axios";

const baseUrl = "/api/auth";

export const signupService = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);
    console.log("signup res from server: ", response);
    return response.data;
  } catch (error) {
    console.log("signupService err: ", error.response.data);
    return error.response.data;
  }
};
