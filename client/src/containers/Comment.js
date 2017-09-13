import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadCommentsForPost } from "../actions";

class Comment extends React.Component {
  componentDidMount() {
    console.log("component mounted", this.props.match.params.postId);
    // loadCommentsForPost(this.props.match.params.postId);
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <h3>Post ID: {this.props.match.params.postId}</h3>
      </div>
    );
  }
}
export default Comment;

// function mapStateToProps() {
//   return {};
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Comment);
