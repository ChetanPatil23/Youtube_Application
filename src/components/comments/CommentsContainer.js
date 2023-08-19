import React from "react";
import { formatCount } from "../../utils/util";
import Comment from "./Comment";
import { commentsList } from "./mockComments";

const CommentsContainer = ({ commentCount }) => {
  return (
    <div>
      <h2 className="text-md">{formatCount(commentCount)} Comments</h2>
      <hr className="my-2" />
      {commentsList.map((comment, idx) => (
        <Comment comment={comment} key={idx} />
      ))}
    </div>
  );
};

export default CommentsContainer;
