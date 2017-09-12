import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Category from "./Category";

class Categories extends React.Component {
  render = () => {
    return (
      <div>
        <ul>
          <Category name="all" path="all" key={0} />
          {this.props.categories.map((category, i) => (
            <Category name={category.name} path={category.path} key={i + 1} />
          ))}
        </ul>
      </div>
    );
  };
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps({ categories }, props) {
  return { categories };
}

export default connect(mapStateToProps)(Categories);
