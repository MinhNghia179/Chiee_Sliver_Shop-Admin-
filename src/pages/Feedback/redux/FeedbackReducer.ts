import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ListFeedbackModel } from "../models/FeedbackModel";
import { EFeedbackType } from "./FeedbackActions";

interface IFeedbackState {
  ListFeedback:ListFeedbackModel;
}
export const initialFeedbackState: IFeedbackState = {
  ListFeedback:{
    results: [],
    total: 0
  },
};

const FeedbackReducer = persistReducer(
  { storage, key: "feedback", whitelist: ["ListFeedback"] },
  (state: IFeedbackState = initialFeedbackState, action: any) => {
    switch (action.type) {
      case EFeedbackType.SET_LIST_FEEDBACK: {
        return {...state,ListFeedback:action.payload};
      }
      default:
        return state;
    }
  }
);
export default FeedbackReducer;
