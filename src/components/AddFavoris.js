import React from "react";

const API_URL ="https://api.themoviedb.org/3/discover/movie?api_key=5b99e2aae56dbf88a9b2f51f28b62e48&page=${pageNumber}";

const AddFavourite = () =>{
    return(
        <div className="box">
        <div className="grid">
          {/* {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))} */}
        </div>
      </div>
    )
}

export default AddFavourite