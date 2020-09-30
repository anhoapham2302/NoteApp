import { combineReducers, createStore } from "redux";
import {noteReducer} from "./reducers/noteReducer";

const rootReducer = combineReducers({
    note: noteReducer
})

export const configureStore = () => createStore(rootReducer);

