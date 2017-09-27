import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";

import Header from "../components/Header";
import PostForm from "../components/PostForm";
import * as actionCreators from "../actions";

class EditPost extends React.Component {
  state = {
    title: "",
    body: "",
    author: "",
    category: "",
    id: "",
    voteScore: "",
    deleted: ""
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ ...this.props.post });
  }

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
    // const category = this.state.category.toLowerCase();
    // const newPost = {
    //   id: uniqid(),
    //   timestamp: Date.now(),
    //   ...this.state,
    //   category: category
    // };
    // this.props.createPost(newPost);
    // this.props.createCategory(category);
    // this.props.history.push("/");
  };

  render() {
    const { title, body, author, category } = this.state;

    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" history={this.props.history} />
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Edit Post" />
            </ToolbarGroup>
          </Toolbar>
          <PostForm
            title={title}
            body={body}
            author={author}
            category={category}
            handleOnChange={this.handleOnChange}
            handleReset={this.handleReset}
            handlePost={this.handlePost}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.object
};

function mapStateToProps(state, props) {
  console.log("mapStateToProps", state);
  return {
    post: state.posts.find(post => post.id === props.match.params.postId)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
