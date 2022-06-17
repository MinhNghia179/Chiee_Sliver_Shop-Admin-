import client from "."

export const getListAccountAPI = (payload:any) => {
  const {id,role_code=''} = payload;
  return client.get(`accounts?id=${id}&role_code=${role_code}`).then(res=>res.data);
}

export const getAccountDetailAPI = (id:any) => {
  return client.get(`accounts/${id}`).then(res=>res.data);
}

export const createAccountAPI = (payload:any) => {
  return client.post('register',payload).then(res=>res.data);
}

export const changeStatusAccountAPI = (payload:any) => {
  return client.put('accounts/update-status',payload).then(res=>res.data);
}

export const resetPasswordAccountAPI = (payload:any) => {
  return client.put('accounts/reset-password',payload).then(res=>res.data);
}

export const updateInfoAccountAPI = (payload:any) => {
  return client.put('accounts/update-info',payload).then(res=>res.data);
}
