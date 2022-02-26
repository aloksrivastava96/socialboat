import { combineReducers } from "redux";
import profileReducer from "./profile/Profile";

import videoReducer from "./video/Video";

const rootReducer = combineReducers({
  videoData: videoReducer,
  profieData: profileReducer,
});

export default rootReducer;
