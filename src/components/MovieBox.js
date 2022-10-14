import React from "react";
import "../styles/accueil.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, poster_path, overview}) => {
  return (
    <div className="movies">
      <h1>{title}</h1>
      <img className="image" src={API_IMG + poster_path} alt="" />
      <p>{overview}</p>
    </div>
  );
};

export default MovieBox;
