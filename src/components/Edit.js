import useInput from "../hooks/use-input";
import React, { useEffect, useState } from "react";
import classes from "./Edit.module.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileData, setProfileData } from "../actions/profile/Profile";
import { v4 } from "uuid";

const isNotEmpty = (value) => value.trim() !== "";

const Edit = (props) => {
  const [uid, setUId] = useState(null);

  useEffect(() => {
    setUId(v4());
  }, []);
  let navigate = useNavigate();
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isNotEmpty);
  const {
    value: bioValue,
    isValid: bioIsValid,
    hasError: bioHasError,
    valueChangeHandler: bioChangeHandler,
    inputBlurHandler: bioBlurHandler,
    reset: resetBio,
  } = useInput(isNotEmpty);
  const {
    value: linkedinValue,
    isValid: linkedinIsValid,
    hasError: linkedinHasError,
    valueChangeHandler: linkedinChangeHandler,
    inputBlurHandler: linkedinBlurHandler,
    reset: resetLinkedin,
  } = useInput(isNotEmpty);
  const {
    value: fbValue,
    isValid: fbIsValid,
    hasError: fbHasError,
    valueChangeHandler: fbChangeHandler,
    inputBlurHandler: fbBlurHandler,
    reset: resetFb,
  } = useInput(isNotEmpty);
  const {
    value: instaValue,
    isValid: instaIsValid,
    hasError: instaHasError,
    valueChangeHandler: instaChangeHandler,
    inputBlurHandler: instaBlurHandler,
    reset: resetInsta,
  } = useInput(isNotEmpty);
  const {
    value: imgValue,
    isValid: imgIsValid,
    hasError: imgHasError,
    valueChangeHandler: imgChangeHandler,
    inputBlurHandler: imgBlurHandler,
    reset: resetImg,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    nameIsValid &&
    ageIsValid &&
    bioIsValid &&
    linkedinIsValid &&
    fbIsValid &&
    instaIsValid &&
    imgIsValid
  ) {
    formIsValid = true;
  }

  const postData = {
    uid: uid,
    name: nameValue,
    age: ageValue,
    bio: bioValue,
    linkedIn: linkedinValue,
    fb: fbValue,
    instagram: instaValue,
    img: imgValue,
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(nameValue);

    props.setProfileData(postData);

    resetName();
    resetAge();
    resetBio();
    resetLinkedin();
    resetFb();
    resetInsta();
    resetImg();
  };

  const backHandler = () => {
    navigate("/");
  };

  const nameClasses = nameHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  return (
    <div className={classes.app}>
      <form onSubmit={submitHandler}>
        <div className={classes["control-group"]}>
          <h2>
            <i className="fa-solid fa-circle-left" onClick={backHandler}></i>
            &nbsp;&nbsp;&nbsp;&nbsp;Profile Edit
          </h2>
          <div className={nameClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <p className={classes["error-text"]}>Please Enter a name.</p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Age</label>
            <input
              type="number"
              id="name"
              value={ageValue}
              onChange={ageChangeHandler}
              onBlur={ageBlurHandler}
            />
            {ageHasError && (
              <p className={classes["error-text"]}>Please Enter an age.</p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Bio</label>
            <input
              type="text"
              id="name"
              value={bioValue}
              onChange={bioChangeHandler}
              onBlur={bioBlurHandler}
            />
            {bioHasError && (
              <p className={classes["error-text"]}>Please Enter bio.</p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">LinkedIn Link</label>
            <input
              type="text"
              id="name"
              value={linkedinValue}
              onChange={linkedinChangeHandler}
              onBlur={linkedinBlurHandler}
            />
            {linkedinHasError && (
              <p className={classes["error-text"]}>
                Please Enter a valid linkedin url.
              </p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">FB Link</label>
            <input
              type="text"
              id="name"
              value={fbValue}
              onChange={fbChangeHandler}
              onBlur={fbBlurHandler}
            />
            {fbHasError && (
              <p className={classes["error-text"]}>
                Please Enter a valid facebook url.
              </p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Instagram Link</label>
            <input
              type="text"
              id="name"
              value={instaValue}
              onChange={instaChangeHandler}
              onBlur={instaBlurHandler}
            />
            {instaHasError && (
              <p className={classes["error-text"]}>
                Please Enter a valid insta url.
              </p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Image Link</label>
            <input
              type="text"
              id="name"
              value={imgValue}
              onChange={imgChangeHandler}
              onBlur={imgBlurHandler}
            />
            {imgHasError && (
              <p className={classes["error-text"]}>
                Please Enter a valid image url.
              </p>
            )}
          </div>
        </div>
        <div className={classes["form-actions"]}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profieData: state.rootReducer.profieData,
});

export default connect(mapStateToProps, {
  getProfileData,
  setProfileData,
})(Edit);
