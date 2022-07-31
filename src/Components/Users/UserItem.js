import React from "react";
import { NavLink } from "react-router-dom";
import { POST_ROUTE } from "../../utils/router-constants";
import Card from "../UI/Card";
import classes from "./Users.module.css";

const UserItem = (props) => {
  const { id, name, email, address, phone } = props.item;

  return (
    <li>
      <Card className={classes.item}>
        <h2 className={classes.heading}>{name}</h2>
        <div className={classes.info}>
          <p>e-mail: {email}</p>
          <p>city: {address.city}</p>
          <p>phone: {phone}</p>
        </div>
        <div className="link-button">
          <NavLink to={POST_ROUTE + id} className="link-button">
            <button className="button">Posts</button>
          </NavLink>
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
