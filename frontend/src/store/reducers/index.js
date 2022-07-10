import { combineReducers } from "redux";

import signReducer from "./signs.reducer";

const rootReducer = combineReducers({
  signs: signReducer,
});

export default rootReducer;