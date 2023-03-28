import React from "react";
import "../styles/accueil.css";
import { Link } from "react-router-dom";
import Details from "../pages/Details";
import { useDispatch } from "react-redux";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = props => {

    const dispatch = useDispatch();
    const addFav = () => dispatch({
      type: "fav/addFav",
      payload :{ id: props.id, title: props.title, overview : props.overview, poster_path : props.poster_path}
    })

    const removeFav =()=> dispatch({
      type:"fav/removeFav",
    })

  return (
    <div className="movies">
      <h1>{props.title}</h1>
      <img className="image" src={API_IMG + props.poster_path} alt=""/>
      <p>{props.overview}</p>
      {props.addMovie === true ? <button onClick={addFav}>Ajouter en Favoris</button> : <button onClick= {removeFav}>Supprimer</button>}
      <button><Link to={`/Details/${props.id}`}>Details</Link></button>
    </div>
  );
};

export default MovieBox;
