import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import MovieBox from "../components/MovieBox";
import Favoris from "./Favoris";
import "../styles/accueil.css";
import ReactPaginate from "react-paginate";
import { current } from "@reduxjs/toolkit";

const Accueil = ({ moviesPerPage }) => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48&page=${currentPage}`;

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
    setUrl(API_URL);
  };
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    setPageCount(Math.ceil(movies.length / moviesPerPage));
  }, [moviesPerPage, currentPage]);

  // const addFav =()=>{
  //  const newFav={
  //   id: setMovies(),
  // };
  //   };

  //   setMovies([data.results, newFav])
  //   }

  //   const removeFav =()=> {
  //   }

  return (
    <div>
      <Navigation />
      <Searchbar setMovies={setMovies} />
      <div className="box">
        <div className="grid">
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>
        <button></button>
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={25}
          marginPagesDisplayed={3}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-link"}
          breakClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Accueil;
