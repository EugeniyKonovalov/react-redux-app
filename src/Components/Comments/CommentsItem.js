import React from "react";
import Card from "../UI/Card";
import classes from "./Comments.module.css";

const CommentsItem = (props) => {
  const { name, email, body } = props.item;
  return (
    <li className={classes.comments}>
      <Card>
        <h2 className={classes.heading}>{name}</h2>
        <div className={classes.box}>
          <p className={classes.email}>{email}:</p>
          <p className={classes.text}>"{body}"</p>
        </div>
      </Card>
    </li>
  );
};

export default CommentsItem;
