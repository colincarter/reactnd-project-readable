import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import Header from "../components/Header";

class NewPost extends React.Component {
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
        </div>
      </MuiThemeProvider>
    );
  }
}

NewPost.propTypes = {
  history: PropTypes.object.isRequired
};

export default NewPost;
