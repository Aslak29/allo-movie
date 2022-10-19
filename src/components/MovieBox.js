import React from "react";
import "../styles/accueil.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Details from "../pages/Details";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({id, title, poster_path, overview}) => {
  return (
    <div className="movies">
      <h1>{title}</h1>
      <img className="image" src={API_IMG + poster_path} alt="" />
      <p>{overview}</p>
      <button>Favoris</button>
      <button><Link to={`/Details/${id}`}>Details</Link></button>
    </div>
  );
};

export default MovieBox;
