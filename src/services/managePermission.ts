import client from "."

export const getListRoleAPI = () => {
  return client.get("roles").then(res=>res.data);
}
