import { createStore, combineReducers, applyMiddleware } from "redux";
import { roomsReducer } from "./roomReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  rooms: roomsReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
