import axios from "axios";

const baseUrl = "/api/user";

export const getUsersService = async () => {
  try {
    const response = await axios.get(baseUrl);

    console.log("getUsers from server: ", response);
    return response.data;
  } catch (error) {
    console.log("getUsersService err: ", error.response.data);
    return error.response.data;
  }
};
