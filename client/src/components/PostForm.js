import React from "react";
import PropTypes from "prop-types";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const PostForm = ({
  title,
  body,
  author,
  category,
  handleOnChange,
  handleReset,
  handlePost
}) => {
  const buttonStyle = { margin: 12 };
  const canPost = title && body && author && category;

  return (
    <div>
      <TextField
        hintText="Post title"
        name="title"
        value={title}
        onChange={handleOnChange}
      />
      <br />
      <TextField
        hintText="Post body"
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
      <TextField
        hintText="category"
        name="category"
        value={category}
        onChange={handleOnChange}
      />
      <br />
      <RaisedButton
        label="Post"
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

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handlePost: PropTypes.func.isRequired
};

export default PostForm;
