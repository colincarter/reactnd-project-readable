import React from "react";
import PropTypes from "prop-types";

const Category = ({ name, path }) => (
  <li>
    <a href={path}>{name}</a>
  </li>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default Category;
