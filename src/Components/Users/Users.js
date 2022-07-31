import React from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import classes from "./Users.module.css";

const Users = () => {
  const users = useSelector((state) => state.app.users);

  return (
    <ul className={classes.user}>
      {users.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Users;
