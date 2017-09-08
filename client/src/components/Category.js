import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Category extends React.Component {
  handleOnClick = event => {
    event.preventDefault();
    const category = event.target.dataset.category;
    this.props.dispatch(setCurrentCategory(category));
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
  path: PropTypes.string.isRequired
};

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
