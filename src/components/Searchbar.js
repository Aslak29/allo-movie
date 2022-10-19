import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import "../styles/searchbar.css";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48&query";

const Searchbar = () => {
  const [setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {}
    console.log(e);
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={searchMovie}>
        <FormControl
          className="searchbar"
          type="search"
          placeholder="Recherche"
          name="query"
          value={query}
          onChange={changeHandler}
        />
        <button type="submit">Recherche</button>
      </form>
    </div>
  );
};

export default Searchbar;
