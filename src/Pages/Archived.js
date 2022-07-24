import React from "react";
import CardTeams from "../Components/CardTeams";
import Grid from "@mui/material/Grid";

export default function Archived({ teams }) {
  return (
    <div className="display_teams">
      <div className="display_teams_header">
        <h2>Archived</h2>
      </div>
      <div className="display_teams_body">
        <Grid container spacing="10px">
          {teams
            .filter((team) => team.is_archived)
            .map((team) => (
              <Grid key={team.id} item xs={4}>
                <CardTeams team={team} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}
