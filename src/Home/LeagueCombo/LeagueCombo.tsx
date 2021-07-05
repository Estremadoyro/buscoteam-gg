import React from "react";

import "./LeagueCombo.css";
export const LeagueCombo: React.FC = () => {
  return (
    <>
      <select name="leagues" id="leagues-id">
        <option value="Unranked" defaultValue="Unranked">
          Unranked
        </option>
        <option value="Hierro">Hierro</option>
        <option value="Bronce">Bronce</option>
        <option value="Plata">Plata</option>
        <option value="Oro">Oro</option>
        <option value="Platino">Platino</option>
        <option value="Diamante">Diamante</option>
        <option value="Master">Master</option>
        <option value="Grandmaster">Grandmaster</option>
        <option value="Challenger">Challenger</option>
      </select>
    </>
  );
};
