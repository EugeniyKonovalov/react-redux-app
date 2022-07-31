import React from "react";
import classes from "./Error.module.css";
const Error = () => {
  return (
    <div className={classes["error-box"]}>
      <h2 className={classes.error}>"404 PAGE NOT FOUND"</h2>
    </div>
  );
};

export default Error;
