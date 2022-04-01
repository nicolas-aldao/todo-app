import React from "react";
import "./TodoSearch.scss";

const TodoSearch = ({ props, searchValue, setSearchValue }) => {
  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <section className="search">
      <input
        className="search__input-search"
        placeholder="Onios"
        type="text"
        onChange={handleChangeValue}
      />
    </section>
  );
};

export { TodoSearch };
