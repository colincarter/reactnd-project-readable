import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uniqid from "uniqid";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import Header from "../components/Header";

import * as actionCreators from "../actions";

class NewPost extends React.Component {
  state = {
    title: "",
    body: "",
    author: "",
    category: ""
  };

  buttonStyle = {
    margin: 12
  };

  handleOnChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleReset = () => {
    this.setState({
      title: "",
      body: "",
      author: "",
      category: ""
    });
  };

  handlePost = () => {
    const newPost = { id: uniqid(), timestamp: Date.now(), ...this.state };
    this.props.createPost(newPost);
  };

  render() {
    const canPost =
      this.state.title &&
      this.state.body &&
      this.state.author &&
      this.state.category;

    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" history={this.props.history} />
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="New Post" />
            </ToolbarGroup>
          </Toolbar>
          <TextField
            hintText="Post title"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
          <br />
          <TextField
            hintText="Post body"
            name="body"
            multiLine={true}
            rows={4}
            value={this.state.body}
            onChange={this.handleOnChange}
          />
          <br />
          <TextField
            hintText="author"
            name="author"
            value={this.state.author}
            onChange={this.handleOnChange}
          />
          <br />
          <TextField
            hintText="category"
            name="category"
            value={this.state.category}
            onChange={this.handleOnChange}
          />
          <br />
          <RaisedButton
            label="Post"
            primary={true}
            disabled={!canPost}
            style={this.buttonStyle}
            onClick={this.handlePost}
          />
          <RaisedButton
            label="Reset"
            secondary={true}
            style={this.buttonStyle}
            onClick={this.handleReset}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

NewPost.propTypes = {
  history: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
export default connect(null, mapDispatchToProps)(NewPost);
