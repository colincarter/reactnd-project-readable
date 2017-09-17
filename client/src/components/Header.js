import React from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";

const Header = ({ title, history }) => {
  const onButtonClick = () => {
    history.push("/");
  };
  return <AppBar title={title} onLeftIconButtonTouchTap={onButtonClick} />;
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
