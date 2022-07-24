import React, { useState } from "react";
import CardTeams from "../Components/CardTeams";
import Grid from "@mui/material/Grid";
import "../Assets/Styles/Header.css";

export default function AllTeams({ teams }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <div className="display_teams">
      <div className="display_teams_header">
        <h2>All Teams</h2>
        <input
          className="search_field"
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="display_teams_body">
        <Grid container spacing="10px">
          {teams
            .filter((filteredTeam) => {
              if (searchTerm === "") {
                return filteredTeam;
              } else if (
                filteredTeam.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return filteredTeam;
              }
            })
            .map((team) => {
              return (
                <Grid key={team.id} item xs={4}>
                  <CardTeams team={team} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
}
