import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Link, useParams } from "react-router-dom";
import MovieBox from "../components/MovieBox";

// const API_URL ="https://api.themoviedb.org/3/movie/{movieid}?api_key=5b99e2aae56dbf88a9b2f51f28b62e48"
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const url ="https://api.themoviedb.org/3/movie/"
const api_key="?api_key=5b99e2aae56dbf88a9b2f51f28b62e48"

const Details = () => {
  const { movieId } = useParams();
  console.log(movieId)

  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const response = await fetch(`${url}${movieId}${api_key}`);
    const movie = await response.json();

    setMovie(movie);
    console.log(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const { title, poster_path, overview } = movie;
  return (
    <div>
      <Navigation />
      <div className="movies">
        <h1>{title}</h1>
        <img className="image" src={API_IMG + poster_path} alt="" />
        <p>{overview}</p>
        <button>Favoris</button>
      </div>
    </div>
  );
};

export default Details;
