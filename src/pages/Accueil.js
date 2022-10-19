import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import MovieBox from "../components/MovieBox";
import "../styles/accueil.css";
import ReactPaginate from "react-paginate";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48";

const Accueil = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults] = useState(0);
  const [currentPage] = useState(1);

  const handlePageClick = () => {
    console.log("clicked");
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results, totalResults);
      });
  }, []);

  // nextPage = (pageNumber) => {
  //   fetch(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48&page=${pageNumber}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.results, currentPage, pageNumber);
  //     });
  // };

  return (
    <div>
      <Navigation />
      <Searchbar />
      <h1>Accueil</h1>
      <div className="box">
        <div className="grid">
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
          
        </div>
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
