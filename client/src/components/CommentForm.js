import React from "react";
import PropTypes from "prop-types";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const CommentForm = ({
  body,
  author,
  handleOnChange,
  handleReset,
  handlePost
}) => {
  const buttonStyle = { margin: 12 };
  const canPost = body && author;

  return (
    <div>
      <TextField
        hintText="Comment body"
        name="body"
        multiLine={true}
        rows={4}
        value={body}
        onChange={handleOnChange}
      />
      <br />
      <TextField
        hintText="author"
        name="author"
        value={author}
        onChange={handleOnChange}
      />
      <br />
      <RaisedButton
        label="Post Comment"
        primary={true}
        disabled={!canPost}
        style={buttonStyle}
        onClick={handlePost}
      />
      <RaisedButton
        label="Reset"
        secondary={true}
        style={buttonStyle}
        onClick={handleReset}
      />
    </div>
  );
};

CommentForm.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handlePost: PropTypes.func.isRequired
};

export default CommentForm;
