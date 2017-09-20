import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

import formattedTimestamp from "../lib/formattedTimestamp";

const Comments = ({ comments }) => {
  if (comments && comments.length === 0) {
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
        {comments.map((comment, i) => (
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
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(Object).isRequired
};

export default Comments;
