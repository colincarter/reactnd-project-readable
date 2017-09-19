import React from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";

class Header extends React.Component {
  onButtonClick = () => {
    if (this.props.history) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <AppBar
        title={this.props.title}
        onLeftIconButtonTouchTap={this.onButtonClick}
      />
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.object
};

export default Header;
