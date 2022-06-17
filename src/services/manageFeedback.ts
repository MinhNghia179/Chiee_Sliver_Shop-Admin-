import client from '.';

export const getListFeedbackAPI = () => {
  return client.get('contact').then(res => res.data);
}

export const updateStatusFeedbackAPI = (payload:any) => {
  return client.put(`contact`,payload).then(res => res.data);
}

export const deleteFeedbackAPI = (id:any) => {
  return client.delete(`contact/${id}`).then(res => res.data);
}