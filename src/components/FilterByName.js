import React from "react";
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
        placeholder="Nombre del personaje"
        value={props.filterName}
        onChange={handleChange}
      />
    </section>
  );
};

export default FilterByName;
