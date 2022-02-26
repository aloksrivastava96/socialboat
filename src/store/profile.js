import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialProfileState = {
  profileData: {
    uid: v4(),
    name: "Alok Srivastava",
    age: "25",
    bio: "MERN Stack Developer",
    linkedIn: "https://www.linkedin.com/in/get-alok-srivastava/",
    fb: "https://www.facebook.com/alok.srivastava.9469545",
    instagram: "https://www.instagram.com/mr.alok_srivastava/",
    img: "https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    setProfile(state, action) {
      state.profileData = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
