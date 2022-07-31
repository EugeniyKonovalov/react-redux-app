import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { appActions } from "../../store/appSlice";
import UserPostsItem from "./UserPostsItem";
import classes from "./UserPosts.module.css";

const UserPosts = () => {
  const posts = useSelector((state) => state.app.posts);
  const selectedUserId = useSelector((state) => state.app.selectedUserId);
  const params = useParams();
  const { userId } = params;
  const dispatch = useDispatch();
  const userPost = posts.filter((post) => post.userId === selectedUserId);
  userPost.sort((a, b) => (a > b ? 1 : -1));
  useEffect(() => {
    dispatch(appActions.setSelectedUserId(+userId));
  }, [dispatch, userId]);

  return (
    <section className="container">
      <ul className={classes.posts}>
        {userPost.map((item) => (
          <UserPostsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default UserPosts;
