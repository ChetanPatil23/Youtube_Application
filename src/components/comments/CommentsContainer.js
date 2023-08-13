import React from "react";
import { formatCount } from "../../utils/util";

const CommentsContainer = ({ commentCount }) => {
  return (
    <div>
      <h2 className="text-md">{formatCount(commentCount)} Comments</h2>
      <hr className="my-2" />
    </div>
  );
};

export default CommentsContainer;
