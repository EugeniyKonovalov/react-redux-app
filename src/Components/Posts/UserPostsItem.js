import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { POST_ROUTE } from "../../utils/router-constants";
import Card from "../UI/Card";
import classes from "./UserPosts.module.css";
const UserPostsItem = (props) => {
  const selectedUserId = useSelector((state) => state.app.selectedUserId);
  const { id, title } = props.item;
  return (
    <li>
      <Card className={classes.post}>
        <h2 className={classes.heading}>{title}</h2>
        <div className="link-button">
          <NavLink to={`${POST_ROUTE}${selectedUserId}/${id}`} key={id}>
            <button className="button">Detail</button>
          </NavLink>
        </div>
      </Card>
    </li>
  );
};

export default UserPostsItem;
