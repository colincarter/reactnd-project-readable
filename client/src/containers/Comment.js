import React from "react";

class Comment extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props.match.params.postId);
    return (
      <div>
        <h1>Comments</h1>

        <h3>Post ID: {this.props.match.params.postId}</h3>
      </div>
    );
  }
}

export default Comment;
