import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

function Search() {
  const { setSearch, Search, searchtAnime } = useContext(Context);
  return (
    <div className="search-container">
      <form action="" onSubmit={searchtAnime}>
        <input
          type="search"
          placeholder="Search Anime"
          value={Search}
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn-input" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
