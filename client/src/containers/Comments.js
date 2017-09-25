import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { List, ListItem } from "material-ui/List";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";

import FloatingButton from "../components/FloatingButton";
import * as actionCreators from "../actions";
import formattedTimestamp from "../lib/formattedTimestamp";

class Comments extends React.Component {
  componentDidMount = () => {
    this.props.setCurrentSort("voteScore");
  };

  onSortChange = (event, value) => {
    this.props.setCurrentSort(value);
  };

  renderComments = sortedComments => {
    if (sortedComments && sortedComments.length === 0) {
      return <h4>No Comments</h4>;
    }

    return sortedComments.map((comment, i) => (
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
    ));
  };

  render() {
    const { sortedComments, post } = this.props;

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
          </ToolbarGroup>
          <FloatingButton to={`/comment/new/${post.id}`} />
        </Toolbar>
        <List>{this.renderComments(sortedComments)}</List>
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(Object).isRequired,
  post: PropTypes.object.isRequired
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
