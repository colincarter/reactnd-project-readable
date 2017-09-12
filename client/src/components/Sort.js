import React from "react";
import PropTypes from "prop-types";

const Sort = ({ fields, onChange }) => {
  return (
    <select onChange={onChange}>
      {fields.map((field, i) => (
        <option key={i} value={field}>
          {field}
        </option>
      ))}
    </select>
  );
};

Sort.propTypes = {
  fields: PropTypes.arrayOf(String).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Sort;
