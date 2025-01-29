import { legacy_createStore as createStore } from "redux";
import NoteReducers from "./NoteReducers";

export const store = createStore(NoteReducers)