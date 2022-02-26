import { SET_PROFILE_DATA, GET_PROFILE_DATA } from "../../actions/ActionTypes";

const initialState = {
  profile: null,
  setNew: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return { ...state, profile: action.payload };
    case SET_PROFILE_DATA:
      return { ...state, setNew: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
