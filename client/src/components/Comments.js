import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "material-ui/List";

const Comments = ({ comments }) => {
  if (comments && comments.length === 0) {
    return <h4>No Comments</h4>;
  }

  return (
    <List>
      {comments.map((comment, i) => (
        <ListItem
          key={i}
          primaryText={comment.body}
          secondaryText={
            <p>
              {comment.author} <span>{comment.timestamp}</span>
            </p>
          }
        />
      ))}
    </List>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(Object).isRequired
};

export default Comments;
