import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { List, ListItem } from "material-ui/List";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";

import * as actionCreators from "../actions";
import { ALL_POSTS } from "../constants";
import formattedTimestamp from "../lib/formattedTimestamp";

import FloatingButton from "../components/FloatingButton";

class PostSummaries extends React.Component {
  linkStyle = {
    textDecoration: "none"
  };

  componentDidMount = () => {
    this.props.setCurrentSort("voteScore");
  };

  onSortChange = (event, value) => {
    this.props.setCurrentSort(value);
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
            <Link
              to={`/post/${post.id}/comments`}
              style={this.linkStyle}
              key={i}
            >
              <ListItem
                key={i}
                primaryText={
                  <p>
                    {post.voteScore} <span>{post.title}</span>
                  </p>
                }
                secondaryText={
                  <p>
                    {post.category}{" "}
                    <span>{formattedTimestamp(post.timestamp)}</span>
                  </p>
                }
              />
            </Link>
          ))}
        </List>
      </div>
    );
  };
}

PostSummaries.propTypes = {
  postsForCategory: PropTypes.arrayOf(Object).isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(PostSummaries);
