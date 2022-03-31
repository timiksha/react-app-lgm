import { GET_USERS } from "./url";

export const getUsers = async () => {
  const response = await fetch(GET_USERS);
  const { data } = await response.json();
  console.log(data);
  return data;
};
