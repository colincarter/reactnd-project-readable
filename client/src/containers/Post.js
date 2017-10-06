import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { grey400 } from "material-ui/styles/colors";

import * as actionCreators from "../actions";
import Header from "../components/Header";
import VotingButtons from "../components/VotingButtons";
import Comments from "./Comments";

import formattedTimestamp from "../lib/formattedTimestamp";

class Post extends React.Component {
  renderIconMenu = postId => {
    const iconButtonElement = (
      <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400} />
      </IconButton>
    );
    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onClick={() => this.handleEditPost(postId)}>Edit</MenuItem>
        <MenuItem onClick={() => this.handleDeletePost(postId)}>
          Delete
        </MenuItem>
      </IconMenu>
    );
  };

  handleDeletePost = postId => {
    this.props.deletePost(postId);
    this.props.history.push("/");
  };

  handleEditPost = postId => {
    const url = `/post/edit/${postId}`;
    this.props.history.push(url);
  };

  onSortChange = event => {
    this.props.setCurrentSort(event.target.value);
  };

  incVoteScore = post => {
    this.props.incVoteScore(post);
  };

  decVoteScore = post => {
    this.props.decVoteScore(post);
  };

  render() {
    if (!this.props.post) {
      return null;
    } else {
      return (
        <MuiThemeProvider>
          <div>
            <Header title="Readable" history={this.props.history} />
            <div style={{ paddingLeft: 10 }}>
              <List>
                <ListItem
                  key={0}
                  primaryText={
                    <div>
                      <h3>
                        {this.props.post.voteScore}{" "}
                        <span>{this.props.post.title}</span>
                        <VotingButtons
                          post={this.props.post}
                          incVoteScore={this.incVoteScore}
                          decVoteScore={this.decVoteScore}
                        />
                      </h3>
                      <p>{this.props.post.body}</p>
                      <p>
                        {this.props.post.author} | {" "}
                        <span>
                          {formattedTimestamp(this.props.post.timestamp)}
                        </span>{" "}
                        | <span>{this.props.comments.length} comments</span>
                      </p>
                    </div>
                  }
                  rightIconButton={this.renderIconMenu(this.props.post.id)}
                />
              </List>
            </div>
            <Comments comments={this.props.comments} post={this.props.post} />
          </div>
        </MuiThemeProvider>
      );
    }
  }
}

Post.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  post: PropTypes.object,
  comments: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state, props) {
  const sortKey = state.currentSort;
  const postId = props.match.params.postId;
  const post = state.posts.find(post => post.id === postId);

  return {
    post: post,
    comments: post
      ? post.comments.concat().sort((a, b) => b[sortKey] - a[sortKey])
      : []
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
