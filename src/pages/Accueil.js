import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import MovieBox from "../components/MovieBox";
import "../styles/accueil.css";

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48";

const Accueil = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        console.log(data.results)
      });
  }, []);

  return (
    <div>
      <Navigation />
      <Searchbar />
      <h1>Accueil</h1>
      <div className="box">
        <div className="grid">
      {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))}</div>
      </div>
    </div>
  );
};

export default Accueil;
