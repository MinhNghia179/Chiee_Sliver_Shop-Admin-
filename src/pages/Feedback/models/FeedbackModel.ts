export interface FeedbackModel {
  id          : number;
  name        : string;
  email       : string;
  subject     : string;
  message     : string;
  created_at  : string;
  status      : string;
}

export interface ListFeedbackModel {
  results : FeedbackModel[],
  total   : number;
}