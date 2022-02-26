import { GET_VIDEO_DATA } from "../../actions/ActionTypes";

const initialState = {
  videos: [],
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_DATA:
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};

export default videoReducer;
