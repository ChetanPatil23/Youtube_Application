import React from "react";
import { formatCount } from "../../utils/util";
import Comment from "./Comment";
import { commentsList } from "./mockComments";

const CommentsList = ({ commentsList, nestingLevel = 0 }) => {
  const borderColors = [
    "border-gray-300",
    "border-blue-300",
    "border-green-300",
    "border-yellow-300",
  ];
  return commentsList.map((comment, idx) => (
    <div className="pl-3" key={idx}>
      <Comment comment={comment} />
      {comment.replies.length > 0 && (
        <div
          className={`ml-10 border-l-2 ${borderColors[nestingLevel]}`}
        >
          <CommentsList
            commentsList={comment.replies}
            nestingLevel={nestingLevel + 1}
          />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = ({ commentCount }) => {
  return (
    <div>
      <h2 className="text-md font-medium">{formatCount(commentCount)} Comments</h2>
      <hr className="my-2" />
      <CommentsList commentsList={commentsList} />
    </div>
  );
};

export default CommentsContainer;
