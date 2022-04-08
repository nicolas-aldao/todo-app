import React from "react";
import { AppContext } from "../../context/AppContext";
import "./TodoSearch.scss";

const TodoSearch = () => {
  const { setSearchValue } = React.useContext(AppContext);
  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
      <section className="search">
        <h3 className="search__h3">Search a To Do</h3>
        <input
          className="search__input-search"
          placeholder="Buy milk and eggs..."
          type="text"
          onChange={handleChangeValue}
        />
      </section>
  );
};

export { TodoSearch };
