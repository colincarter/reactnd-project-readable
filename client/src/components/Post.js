import React from "react";
import PropTypes from "prop-types";

const Post = ({
  id,
  author,
  body,
  category,
  deleted,
  timestamp,
  title,
  voteScore
}) => {
  return (
    <li>
      {title}({category}) - ({voteScore})
    </li>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired
};

export default Post;
