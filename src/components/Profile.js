import { useEffect } from "react";
import classes from "./Profile.module.css";
import { connect, useSelector } from "react-redux";
import { getVideoData } from "../actions/video/Video";
import Videocard from "./Videocard";
import profile from "../assets/profile.jpg";
import notfound from "../assets/no-data-found.png";
import { getProfileData, setProfileData } from "../actions/profile/Profile";

const Profile = (props) => {
  useEffect(() => {
    // setTimeout(() => {
    //   props.getVideoData("al", 5);
    // }, 300);
    setTimeout(() => {
      props.getProfileData("P999");
    }, 300);
    console.log(props);
  }, []);

  console.log("Check", props.videoData.videos);

  const profileData = useSelector((state) => state.pro.profileData);
  console.log("GET in Profile::", profileData);
  const instaLink = profileData.instagram;
  console.log(instaLink);

  var content = null;

  if (
    props.videoData &&
    props.videoData.videos &&
    props.videoData.videos.results
  ) {
    content = props.videoData.videos.results.map((video, index) => {
      console.log(index);
      return <Videocard key={index} data={video} />;
    });
  } else {
    content = <img src={notfound} className={classes.notFound} />;
  }

  return (
    <main className={classes.profile}>
      <div className={classes["profile-div"]}>
        <div className={classes["profile-url-div"]}>
          <div className={classes["fb-div"]}>
            <a target="_blank" href={profileData.fb}>
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className={classes["middle-div"]}>
            <div className={classes["linkedin-div"]}>
              <a target="_blank" href={profileData.linkedIn}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className={classes["img-div"]}>
              <img src={profileData.img} className={classes.pic} />
            </div>
          </div>
          <div className={classes["insta-div"]}>
            <a target="_blank" href={profileData.instagram}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className={classes["profile-name-div"]}>
          <h3>{profileData.name}</h3>
        </div>
      </div>

      <cite className={classes.bio}>"{profileData.bio}"</cite>

      {content}
    </main>
  );
};

const mapStateToProps = (state) => ({
  videoData: state.rootReducer.videoData,
  profieData: state.rootReducer.profieData,
});

export default connect(mapStateToProps, {
  getVideoData,
  getProfileData,
  setProfileData,
})(Profile);
