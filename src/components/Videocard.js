import React from "react";
import Ratio from "react-bootstrap/Ratio";
import classes from "./Videocard.module.css";

const Videocard = (props) => {
  console.log(props);
  return (
    <div className={classes["container-card"]}>
      <div className={classes["video-card"]}>
        <Ratio aspectRatio="16x9">
          <video width="420" height="240" controls>
            <source src={props.data.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Ratio>
      </div>
      <div>
        <h2 className={classes["video-title"]}>Title: {props.data.heading}</h2>
        <h4 className={classes["video-desc"]}>
          “The mind is the most important part of achieving any fitness goal.
          Mental change always comes before physical change.”
        </h4>

        <div className={classes["video-tags"]}>
          {props.data.tags.map((tag, index) => {
            return (
              <h6 key={index} className={classes.tag}>
                #{tag}
              </h6>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Videocard;
