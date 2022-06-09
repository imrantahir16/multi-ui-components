import React from "react";
import classes from "./FlipBox.module.css";
const FlipBox = () => {
  return (
    <div className={classes.cube}>
      <div className={classes["active-state"]}>
        <h2>CSS 3D Flip Box</h2>
      </div>
      <div className={classes["default-state"]}>
        <h1>Hover Me</h1>
      </div>
    </div>
  );
};

export default FlipBox;
