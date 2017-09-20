import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { List, ListItem } from "material-ui/List";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import RaisedButton from "material-ui/RaisedButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";

import * as actionCreators from "../actions";
import formattedTimestamp from "../lib/formattedTimestamp";

class Comments extends React.Component {
  componentDidMount = () => {
    this.props.setCurrentSort("voteScore");
  };

  onSortChange = (event, value) => {
    this.props.setCurrentSort(value);
  };

  render() {
    const { sortedComments } = this.props;

    if (sortedComments && sortedComments.length === 0) {
      return <h4>No Comments</h4>;
    }

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Comments" />

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
            <ToolbarSeparator />
            <Link to="/post/new">
              <RaisedButton label="New Comment" primary={true} />{" "}
            </Link>
          </ToolbarGroup>
        </Toolbar>
        <List>
          {sortedComments.map((comment, i) => (
            <ListItem
              key={i}
              primaryText={comment.body}
              secondaryText={
                <p>
                  {comment.author}
                  <span>{formattedTimestamp(comment.timestamp)}</span>
                </p>
              }
            />
          ))}
        </List>
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state, props) {
  const comments = props.comments.concat();
  const sortKey = state.currentSort;

  return {
    sortedComments: comments.sort((a, b) => b[sortKey] - a[sortKey])
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
