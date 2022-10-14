import React from "react";
import "../styles/searchbar.css";

const Searchbar = (props) => {
  return (
    <div className="searchbar">
          <input placeholder="Recherche" type="text" onChange={props.handleSubmit} />
          <button onSubmit={props.handleSubmit}>Submit</button>
    </div>
  );
};

export default Searchbar;
