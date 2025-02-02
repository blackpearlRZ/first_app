import { legacy_createStore as createStore } from "redux";
import likeReducer from "./LikeReducer";

export const livreStore = createStore(likeReducer)