import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import GetIpiReducers from "./Reducers/GetIpiReducer";

const reducers = combineReducers({
  getIpiStore: GetIpiReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
