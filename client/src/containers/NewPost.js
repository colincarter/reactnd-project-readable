import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import Header from "../components/Header";

class NewPost extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" />
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

export default NewPost;
