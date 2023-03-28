import React from "react";
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import "../styles/favoris.css";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import MovieBox from "../components/MovieBox";


const Favoris = () => {

  const fav =useSelector((state) => state.fav)

  

  const handlePageClick =() =>{
    console.log("clicked")
  }
  return (
    <div>
      <Navigation />
      <Searchbar />
      <h1>Favoris</h1>
      <div>{fav.map((movieParam) => <MovieBox addMovie={false} key={movieParam.movie.id} {...movieParam.movie}/>)}</div>
      <div className="pagination">
      <ReactPaginate 
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={25}
      marginPagesDisplayed={3}
      pageRangeDisplayed={6}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-link'}
      nextClassName={'page-link'}
      breakClassName={'page-link'}
      activeClassName={'active'}
      />
    </div>
    </div>
  );
};

export default Favoris;
