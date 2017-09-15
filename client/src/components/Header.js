import React from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";

const Header = ({ title }) => <AppBar title={title} />;

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
