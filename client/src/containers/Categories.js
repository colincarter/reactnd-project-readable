import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Category from "../../components/Category";

class Categories extends React.Component {
  render = () => {
    return (
      <div>
        <ul>
          {this.props.categories.map((category, i) => (
            <Category name={category.name} path={category.path} key={i} />
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
