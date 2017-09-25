import React from "react";
import PropTypes from "prop-types";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import { Link } from "react-router-dom";

const FloatingButton = ({ to }) => (
  <Link to={to}>
    <FloatingActionButton>
      <ContentAdd />
    </FloatingActionButton>
  </Link>
);

FloatingButton.propTypes = {
  to: PropTypes.string.isRequired
};

export default FloatingButton;
