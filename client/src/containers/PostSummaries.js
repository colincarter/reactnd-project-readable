import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { List, ListItem } from "material-ui/List";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { grey400 } from "material-ui/styles/colors";
import * as actionCreators from "../actions";
import { ALL_POSTS } from "../constants";
import formattedTimestamp from "../lib/formattedTimestamp";

import FloatingButton from "../components/FloatingButton";
import VotingButtons from "../components/VotingButtons";

class PostSummaries extends React.Component {
  linkStyle = {
    textDecoration: "none"
  };

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

  shouldComponentUpdate = (nextProps, nextState) => {
    return Object.keys(nextProps.comments).length > 0;
  };

  componentDidMount = () => {
    this.props.setCurrentSort("voteScore");
  };

  onSortChange = (event, value) => {
    this.props.setCurrentSort(value);
  };

  handleListClick = (category, postId) => {
    const url = `/${category}/${postId}`;
    this.props.history.push(url);
  };

  handleDeletePost = postId => {
    this.props.deletePost(postId);
  };

  handleEditPost = postId => {
    const url = `/post/edit/${postId}`;
    this.props.history.push(url);
  };

  incVoteScore = post => {
    this.props.incVoteScore(post);
  };

  decVoteScore = post => {
    this.props.decVoteScore(post);
  };

  render = () => {
    const comments = this.props.comments;

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Posts" />

            <FontIcon className="muidocs-icon-custom-sort" />

            <IconMenu
              onChange={this.onSortChange}
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="voteScore" value="voteScore" />
              <MenuItem primaryText="timestamp" value="timestamp" />
            </IconMenu>
          </ToolbarGroup>
          <FloatingButton to="/post/new" />
        </Toolbar>
        <List>
          {this.props.postsForCategory.map((post, i) => (
            <ListItem
              key={i}
              primaryText={
                <p>
                  {post.voteScore} <span>{post.title}</span>
                  <VotingButtons
                    post={post}
                    incVoteScore={this.incVoteScore}
                    decVoteScore={this.decVoteScore}
                  />
                </p>
              }
              secondaryText={
                <p>
                  {post.category} | {" "}
                  <span>{formattedTimestamp(post.timestamp)}</span> | {" "}
                  <span>{post.author}</span> | {" "}
                  {
                    <span>
                      {comments[post.id] ? comments[post.id].length : 0}{" "}
                      comments
                    </span>
                  }
                </p>
              }
              rightIconButton={this.renderIconMenu(post.id)}
              onClick={() => this.handleListClick(post.category, post.id)}
            />
          ))}
        </List>
      </div>
    );
  };
}

PostSummaries.propTypes = {
  postsForCategory: PropTypes.arrayOf(Object).isRequired,
  history: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  setCurrentSort: PropTypes.func.isRequired,
  incVoteScore: PropTypes.func.isRequired,
  decVoteScore: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  const posts =
    state.currentCategory === ALL_POSTS
      ? state.posts
      : state.posts.filter(post => post.category === state.currentCategory);

  const sortKey = state.currentSort;

  return {
    postsForCategory: posts.concat().sort((a, b) => b[sortKey] - a[sortKey]),
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostSummaries)
);
