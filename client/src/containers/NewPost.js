import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uniqid from "uniqid";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";

import Header from "../components/Header";
import PostForm from "../components/PostForm";
import * as actionCreators from "../actions";

class NewPost extends React.Component {
  state = {
    title: "",
    body: "",
    author: "",
    category: ""
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
    const category = this.state.category.toLowerCase();
    const newPost = {
      id: uniqid(),
      timestamp: Date.now(),
      ...this.state,
      category: category
    };
    this.props.createPost(newPost);
    this.props.createCategory(category);
    this.props.history.push("/");
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

          <PostForm
            title={this.state.title}
            body={this.state.body}
            author={this.state.author}
            category={this.state.category}
            handleOnChange={this.handleOnChange}
            handleReset={this.handleReset}
            handlePost={this.handlePost}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

NewPost.propTypes = {
  history: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired,
  createCategory: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
export default connect(null, mapDispatchToProps)(NewPost);
