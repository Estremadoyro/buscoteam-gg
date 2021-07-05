import React from "react";

import "./SearchBar.css";

export const SearchBar: React.FC = () => {
  return (
    <>
      <form className="search-form">
        <div className="bar">
          <input type="text" placeholder="Buscar team o jugador ... " />
        </div>
        <div className="bar-btn">
          <button>Buscar</button>
        </div>
      </form>
    </>
  );
};
