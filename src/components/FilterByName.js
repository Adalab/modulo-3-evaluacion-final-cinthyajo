import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name"></label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Nombre del personaje"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
