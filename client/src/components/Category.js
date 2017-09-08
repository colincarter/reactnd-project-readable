import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

class Category extends React.Component {
  handleOnClick = event => {
    event.preventDefault();
    const category = event.target.dataset.category;
    this.props.setCurrentCategory(category);
  };

  render = () => {
    const { path, name } = this.props;

    return (
      <li>
        <a
          href={`/${path}/posts`}
          data-category={path}
          onClick={this.handleOnClick}
        >
          {name}
        </a>
      </li>
    );
  };
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  setCurrentCategory: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(Category);
