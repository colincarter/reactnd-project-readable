import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

class Categories extends React.Component {
  componentDidMount = () => {
    this.props.loadCategories();
  };

  render = () => {
    return null;
  };
}

Categories.propTypes = {
  loadCategories: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
