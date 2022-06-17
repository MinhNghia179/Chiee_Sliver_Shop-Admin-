import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ListBlogModel } from "../models/BlogModel";
import { EBlogType } from "./BlogActions";

interface IBlogState {
  ListBlog: ListBlogModel;
}
export const initialBlogState: IBlogState = {
  ListBlog: {
    results: [],
    total: 0,
  },
};

const BlogReducer = persistReducer(
  { storage, key: "blog", whitelist: ["ListBlog"] },
  (state: IBlogState = initialBlogState, action: any) => {
    switch (action.type) {
      case EBlogType.SET_LIST_BLOG: {
        return { ...state, ListBlog: action.payload };
      }
      default:
        return state;
    }
  }
);
export default BlogReducer;
