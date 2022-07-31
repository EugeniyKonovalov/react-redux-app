import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../store/appSlice";
import { uiAction } from "../../store/uiSlice";
import { useNavigate } from "react-router-dom";
import classes from "./PostForm.module.css";
import { POST_ROUTE } from "../../utils/router-constants";

const PostForm = (props) => {
  const dispatch = useDispatch();
  const selectedPostId = useSelector((state) => state.app.selectedPostId);
  const selectedUserId = useSelector((state) => state.app.selectedUserId);
  const isEditPost = useSelector((state) => state.ui.isEditPost);
  const detailPost = useSelector((state) => state.app.detailPosts);
  const titlePost = detailPost.map((item) => item.title);
  const bodyPost = detailPost.map((item) => item.body);
  const [title, setTitle] = useState(!isEditPost ? "" : titlePost);
  const [body, setBody] = useState(!isEditPost ? "" : bodyPost);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      !isEditPost
        ? appActions.addPostAsync({
            title,
            body,
            userId: selectedUserId,
          })
        : appActions.editPostAsync({
            title,
            body,
            id: selectedPostId,
          }) &&
            appActions.editPost({
              title,
              body,
              id: selectedPostId,
            })
    );
    isEditPost && dispatch(uiAction.onPostEdit(false));
    setTitle("");
    setBody("");
    !isEditPost && navigate(POST_ROUTE + selectedUserId, { replace: true });
    dispatch(uiAction.onToggleModal());
    isEditPost && navigate(-1, { replace: true });
  };
  const onCloseModalHandler = () => {
    dispatch(uiAction.onToggleModal());
    dispatch(uiAction.onPostEdit(false));
    navigate(-1);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.heading}>
        <img
          src={require("../../assets/image/close.png")}
          alt="Close icon"
          onClick={onCloseModalHandler}
        />
      </div>
      <h2 className={classes.title}>
        {!isEditPost ? "Add New Post" : "Edit Post"}
      </h2>
      <div className={classes.control}>
        <input
          value={title}
          type="text"
          placeholder="Enter post title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          value={body}
          rows="8"
          placeholder="Enter post text"
          onChange={(event) => setBody(event.target.value)}
        />
      </div>

      <div className="link-button">
        <button className="button">
          {!isEditPost ? "Add new" : "Edit Post"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
