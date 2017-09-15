import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { List, ListItem } from "material-ui/List";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import RaisedButton from "material-ui/RaisedButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";

import { Link } from "react-router-dom";
import * as actionCreators from "../actions";
import { ALL_POSTS } from "../constants";
import PostSummaryLine from "../components/PostSummaryLine";
import Sort from "../components/Sort";

class PostSummaries extends React.Component {
  linkStyle = {
    textDecoration: "none"
  };

  componentDidMount = () => {
    this.props.setCurrentSort("voteScore");
  };

  onSortChange = event => {
    this.props.setCurrentSort(event.target.value);
  };

  render = () => {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Posts" />

            <FontIcon className="muidocs-icon-custom-sort" />

            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="voteScore" />
              <MenuItem primaryText="timestamp" />
            </IconMenu>
            <ToolbarSeparator />
            <RaisedButton label="New Post" primary={true} />
          </ToolbarGroup>
        </Toolbar>
        <List>
          {this.props.postsForCategory.map((post, i) => (
            <Link to={`/post/${post.id}/comments`} style={this.linkStyle}>
              <ListItem
                key={i}
                primaryText={post.title}
                secondaryText={`${post.category} - ${post.voteScore}`}
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
