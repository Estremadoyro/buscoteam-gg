import React from "react";

import { SearchBar } from "./SearchBar/SearchBar";
import { RegionCombo } from "./RegionCombo/RegionCombo";
import { LeagueCombo } from "./LeagueCombo/LeagueCombo";

import "./Home.css";

export const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <div className="combos">
          <div className="league-container">
            <LeagueCombo />
          </div>
          <div className="region-container">
            <RegionCombo />
          </div>
        </div>
        <div className="searchbar-container">
          <SearchBar />
        </div>
      </div>
    </>
  );
};
