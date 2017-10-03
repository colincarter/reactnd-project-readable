import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

class Category extends React.Component {
  handleOnClick = path => {
    this.props.setCurrentCategory(path);
    this.props.history.push(path);
  };

  style = { margin: 12 };

  render = () => {
    return (
      <RaisedButton
        label={this.props.path}
        style={this.style}
        data-category={this.props.path}
        onClick={event => {
          this.handleOnClick(this.props.path);
        }}
      />
    );
  };
}

Category.propTypes = {
  path: PropTypes.string.isRequired,
  setCurrentCategory: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Category));
