import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/FilterByName.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <section className="formSection">
      <label className="formLabel" htmlFor="name"></label>
      <input
        className="formInput"
        type="text"
        name="name"
        id="name"
        placeholder="Name of the character"
        value={props.filterName}
        onChange={handleChange}
      />
    </section>
  );
};

FilterByName.propTypes = {
  filterName: PropTypes.string,
};
export default FilterByName;
