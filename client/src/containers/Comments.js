import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import Sort from "../components/Sort";
import Post from "../components/Post";

class Comments extends React.Component {
  componentDidMount = () => {
    this.props.loadCommentsForPost(this.props.match.params.postId);
  };

  onSortChange = event => {
    this.props.setCurrentSort(event.target.value);
  };

  render() {
    return (
      <div>
        <Post {...this.props.post} />
        <h1>Comments</h1>
        <div>
          Sorted by:
          <span>
            <Sort
              fields={["voteScore", "timestamp"]}
              onChange={this.onSortChange}
            />
          </span>
        </div>
        <ul>
          {this.props.comments.map((comment, i) => (
            <li key={i}>
              {comment.body} - {comment.timestamp} - {comment.voteScore}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const sortKey = state.currentSort;
  const postId = props.match.params.postId;

  return {
    comments: state.comments.concat().sort((a, b) => b[sortKey] - a[sortKey]),
    post: state.posts.find(post => post.id === postId)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
