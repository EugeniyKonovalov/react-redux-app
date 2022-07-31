import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { appActions } from "./../../store/appSlice";
import PostItem from "./PostItem";

const PostDetail = () => {
  const posts = useSelector((state) => state.app.posts);
  const selectedPostId = useSelector((state) => state.app.selectedPostId);
  const params = useParams();
  const { postId } = params;
  const dispatch = useDispatch();
  const detailPost = posts.filter((item) => item.id === selectedPostId);

  useEffect(() => {
    dispatch(appActions.setSelectedPostId(+postId));
    dispatch(appActions.setDetailPosts(detailPost));
  }, [detailPost, dispatch, postId]);

  return (
    <ul>
      {detailPost.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default PostDetail;
