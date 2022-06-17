import client from ".";

export const loginApi = (email: string, password: string) => {
  return client.post("login", { email, password }).then((res) => res.data);
};
export const requestPassWord = (email: string) => {};
