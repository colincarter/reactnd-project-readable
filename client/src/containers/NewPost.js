import React from "react";
import PropTypes from "prop-types";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import Header from "../components/Header";

class NewPost extends React.Component {
  buttonStyle = {
    margin: 12
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" history={this.props.history} />
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="New Post" />
            </ToolbarGroup>
          </Toolbar>
          <TextField hintText="Post title" />
          <br />
          <TextField hintText="Post body" multiLine={true} rows={4} />
          <br />
          <TextField hintText="author" />
          <br />
          <TextField hintText="category" />
          <br />
          <RaisedButton
            label="Post"
            primary={true}
            disabled={true}
            style={this.buttonStyle}
          />
          <RaisedButton
            label="Reset"
            secondary={true}
            style={this.buttonStyle}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

NewPost.propTypes = {
  history: PropTypes.object.isRequired
};

export default NewPost;
