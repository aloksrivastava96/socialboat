import axios from "axios";
import { GET_PROFILE_DATA, SET_PROFILE_DATA } from "../ActionTypes";

export const getProfileData = (id) => {
  console.log("get profile param:", id);
  return (dispatch) => {
    dispatch({
      type: GET_PROFILE_DATA,
    });
    const option = {
      url: `${process.env.REACT_APP_BACKEND_URL}/assignmentGet`,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      params: {
        uid: id,
      },
    };
    axios(option)
      .then((response) => {
        console.log("res get profile", response.data);
        dispatch({
          type: GET_PROFILE_DATA,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("err manage", error);
      });
  };
};

export const setProfileData = (profileData) => {
  console.log("set profile data:", profileData);
  return (dispatch) => {
    const option = {
      url: `${process.env.REACT_APP_BACKEND_URL}/assignmentPost`,
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      params: {
        uid: profileData.uid,
        name: profileData.name,
        age: profileData.age,
        bio: profileData.bio,
        linkedIn: profileData.linkedIn,
        fb: profileData.fb,
        instagram: profileData.instagram,
        img: profileData.img,
      },
    };

    axios(option)
      .then((res) => {
        dispatch({
          type: SET_PROFILE_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(" set profile err ", error);
      });
  };
};
