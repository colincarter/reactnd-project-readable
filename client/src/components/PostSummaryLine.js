import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostSummaryLine = ({
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
    <Link to={`/post/${id}/comments`}>
      {title} ({category}) - ({voteScore})
    </Link>
  );
};

PostSummaryLine.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired
};

export default PostSummaryLine;
