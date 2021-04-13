import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
