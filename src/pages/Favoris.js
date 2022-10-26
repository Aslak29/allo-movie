import React from "react";
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import "../styles/favoris.css";
import ReactPaginate from "react-paginate";

const API_URL ="https://api.themoviedb.org/3/discover/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48&id";

const Favoris = () => {

  const FAV_ORDERED ='FAV_ORDERED'

  function orderFav() {
    return{
      type: FAV_ORDERED
    }
  }

  const handlePageClick =() =>{
    console.log("clicked")
  }
  return (
    <div>
      <Navigation />
      <Searchbar />
      <h1>Favoris</h1>
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
