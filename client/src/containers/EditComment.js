import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";

import Header from "../components/Header";
import CommentForm from "../components/CommentForm";
import * as actionCreators from "../actions";

class EditComment extends React.Component {
  state = {
    id: "",
    body: "",
    author: "",
    parentId: ""
  };

  componentDidMount = () => {
    if (this.props.comment) {
      this.setState({ ...this.props.comment });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.comment) {
      this.setState({ ...nextProps.comment });
    }
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

  handlePost = () => {
    const comment = { timestamp: Date.now(), ...this.state };
    this.props.editComment(comment);
    this.props.history.push(`/comment/${this.state.id}`);
  };

  render() {
    if (this.props.comment === undefined) {
      return null;
    }
    const { body, author } = this.state;

    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" history={this.props.history} />
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Edit Comment" />
            </ToolbarGroup>
          </Toolbar>
          <CommentForm
            body={body}
            author={author}
            handleOnChange={this.handleOnChange}
            handleReset={this.handleReset}
            handlePost={this.handlePost}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

EditComment.propTypes = {
  comment: PropTypes.object,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    comment: state.comments.find(
      comment => comment.id === props.match.params.commentId
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
