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

  componentDidMount = () => {
    this.props.setCurrentSort("voteScore");
  };

  onSortChange = (event, value) => {
    this.props.setCurrentSort(value);
  };

  handleListClick = postId => {
    const url = `/post/${postId}/comments`;
    this.props.history.push(url);
  };

  handleDeletePost = postId => {
    this.props.deletePost(postId);
  };

  handleEditPost = postId => {
    const url = `/post/edit/${postId}`;
    this.props.history.push(url);
  };

  render = () => {
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
                </p>
              }
              secondaryText={
                <p>
                  {post.category}  | {" "}
                  <span>{formattedTimestamp(post.timestamp)}</span>  | {" "}
                  <span>{post.comments.length} comments</span>
                </p>
              }
              rightIconButton={this.renderIconMenu(post.id)}
              onClick={() => this.handleListClick(post.id)}
            />
          ))}
        </List>
      </div>
    );
  };
}

PostSummaries.propTypes = {
  postsForCategory: PropTypes.arrayOf(Object).isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  const posts =
    state.currentCategory === ALL_POSTS
      ? state.posts
      : state.posts.filter(post => post.category === state.currentCategory);

  const sortKey = state.currentSort;

  return {
    postsForCategory: posts.concat().sort((a, b) => b[sortKey] - a[sortKey])
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostSummaries)
);
