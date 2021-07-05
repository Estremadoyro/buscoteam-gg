import React from "react";

import "./RegionCombo.css";

export const RegionCombo: React.FC = () => {
  return (
    <>
      <select name="regions" id="regions-id">
        <option value="LAS" defaultValue="LAS">
          LAS
        </option>
        <option value="LAN">LAN</option>
        <option value="Brasil">Brasil</option>
        <option value="NA">NA</option>
        <option value="EUW">EUW</option>
        <option value="EUN">EUN</option>
        <option value="Korea">Korea</option>
        <option value="Oceania">Oceania</option>
        <option value="Japan">Japan</option>
        <option value="Turkey">Turkey</option>
      </select>
    </>
  );
};
