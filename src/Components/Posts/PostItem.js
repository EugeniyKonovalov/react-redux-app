import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NEW_POST } from "../../utils/router-constants";
import { appActions } from "./../../store/appSlice";
import { uiAction } from "./../../store/uiSlice";
import Card from "../UI/Card";
import Comments from "./../Comments/Comments";
import classes from "./Post.module.css";

const PostItem = (props) => {
  const dispatch = useDispatch();
  const selectedPostId = useSelector((state) => state.app.selectedPostId);
  const { item } = props;
  const isShowComments = useSelector((state) => state.ui.showComments);
  const navigate = useNavigate();
  const deletePostHandler = () => {
    dispatch(appActions.deletePostAsync(selectedPostId));
    dispatch(appActions.deletePost(selectedPostId));
  };

  const editPostsHandler = () => {
    dispatch(uiAction.onPostEdit(true));
    dispatch(uiAction.onToggleModal());
    navigate(NEW_POST);
  };

  const showCommentsHandler = () => dispatch(uiAction.onToggleComments());

  return (
    <li>
      <Card>
        <div className={classes["post-box"]}>
          <h2 className={classes.heading}>{item.title}</h2>
          <p className={classes.text}>{item.body}</p>
          <button className="button" onClick={showCommentsHandler}>
            Show Comments
          </button>
          {isShowComments && <Comments />}
        </div>
        <div className="link-button">
          <button className="button" onClick={editPostsHandler}>
            Edit Post
          </button>
          <button className="button" onClick={deletePostHandler}>
            Delete Post
          </button>
        </div>
      </Card>
    </li>
  );
};

export default PostItem;
