import React from "react";
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

export default Filters;
