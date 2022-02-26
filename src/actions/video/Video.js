import axios from "axios";
import { GET_VIDEO_DATA } from "../ActionTypes";
// import { REACT_APP_BACKEND_URL } from "process.env.development";

export const getVideoData = (query, num) => {
  console.log("get video param:", query, num);
  return (dispatch) => {
    console.log(`INNNNNN, ${process.env.REACT_APP_BACKEND_URL}`);
    dispatch({
      type: GET_VIDEO_DATA,
    });
    const option = {
      url: `${process.env.REACT_APP_BACKEND_URL}/assignmentVideos`,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      params: {
        q: query,
        numResults: num,
      },
    };
    axios(option)
      .then((response) => {
        console.log("res get video", response.data);
        dispatch({
          type: GET_VIDEO_DATA,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("err manage", error);
      });
  };
};
