import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./TodoSearch.scss";

const TodoSearch = ({ state: { setSearchValue } }) => {
  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <section className="search">
      <h3 className="search__h3">Search a To Do</h3>
      <div className="search__container">
        <AiOutlineSearch className="search-icon" />
        <input
          className="search__input-search"
          placeholder="Buy milk and eggs..."
          type="text"
          onChange={handleChangeValue}
        />
      </div>
    </section>
  );
};

export { TodoSearch };
