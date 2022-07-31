import React from "react";
import { useSelector } from "react-redux";
import CommentsItem from "./CommentsItem";

const Comments = () => {
  const comments = useSelector((state) => state.app.comments);
  const selectedPostId = useSelector((state) => state.app.selectedPostId);
  const postComments = comments.filter(
    (item) => item.postId === selectedPostId
  );
  return (
    <ul>
      {postComments.map((item) => (
        <CommentsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Comments;
