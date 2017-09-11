import React from "react";

const Sort = ({ fields }) => {
  return (
    <select>
      {fields.map(field => <option value={field}>{field}</option>)}
    </select>
  );
};

export default Sort;
