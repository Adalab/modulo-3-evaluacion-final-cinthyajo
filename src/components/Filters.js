import React from "react";
import PropTypes from "prop-types";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};
Filters.propTypes = {
  filterName: PropTypes.string,
};

export default Filters;
