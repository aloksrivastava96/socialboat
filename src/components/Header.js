import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/auth";
import logo from "../assets/fitness-logo.png";
import profile from "../assets/profile.jpg";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getVideoData } from "../actions/video/Video";
import { getProfileData, setProfileData } from "../actions/profile/Profile";
import { useNavigate } from "react-router-dom";
import { profileActions } from "../store/profile";

const Header = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    //   props.getVideoData("al", 5);
    // }, 300);
    setTimeout(() => {
      props.getProfileData("P999");
    }, 300);
    console.log(props);
  }, []);

  const profileData = useSelector((state) => state.pro.profileData);
  console.log("GET::", profileData);

  const [isClick, setIsClick] = useState(false);
  const [query, setQuery] = useState("al");
  const [uname, setUName] = useState(null);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const menuToggleHandler = () => {
    setIsClick((prev) => {
      return (prev = !prev);
    });
  };

  const editHandler = () => {
    navigate("/edit");
    menuToggleHandler();
  };

  const searchHandler = (event) => {
    console.log("Searching...", event.target.value);
    setQuery(event.target.value);
    setTimeout(() => {
      props.getVideoData(event.target.value, 5);
    }, 300);
  };

  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} />
      {isAuth && (
        <nav>
          <ul>
            <li>
              <form className={classes.searchBar}>
                <input
                  type="text"
                  className={classes.searchInput}
                  onChange={searchHandler}
                />
              </form>
            </li>
            <li>
              <div className={isClick ? classes.menuDrp : classes.menuDrpN}>
                <button className={classes.drpBtn} onClick={menuToggleHandler}>
                  <img src={profileData.img} className={classes.profile} />
                </button>

                {isClick && (
                  <div className={classes.drpContent}>
                    <button onClick={editHandler}>Edit Profile</button>
                    <button onClick={logoutHandler}>Logout</button>
                  </div>
                )}
              </div>
            </li>
            <li>{profileData.name}</li>
          </ul>
        </nav>
      )}
    </header>
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
})(Header);
