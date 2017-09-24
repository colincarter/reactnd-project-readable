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

class NewComment extends React.Component {
  state = {
    body: "",
    author: ""
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
      body: "",
      author: ""
    });
  };

  handlePostComment = () => {
    const newComment = { id: uniqid(), timestamp: Date.now(), ...this.state };
    this.props.createComment(newComment);
  };

  render() {
    const canPost = this.state.body && this.state.author;

    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" history={this.props.history} />
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="New Comment" />
            </ToolbarGroup>
          </Toolbar>
          <TextField
            hintText="Comment Body"
            name="body"
            value={this.state.body}
            rows={4}
          />
          <br />
          <TextField
            hintText="author"
            name="author"
            value={this.state.author}
            onChange={this.handleOnChange}
          />
          <br />
          <RaisedButton
            label="Post"
            primary={true}
            disabled={!canPost}
            style={this.buttonStyle}
            onClick={this.handlePostComment}
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

NewComment.propTypes = {
  history: PropTypes.object.isRequired,
  createComment: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
export default connect(null, mapDispatchToProps)(NewComment);
