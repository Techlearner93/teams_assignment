import "../Assets/Styles/Content.css";
import React, { useState, useEffect } from "react";
import AllTeams from "../Pages/AllTeams.js";
import Favourites from "../Pages/Favourites.js";
import Archived from "../Pages/Archived.js";
import CardActivity from "../Components/CardActivity.js";

const Content = () => {
  const API_URL = "../data.json";

  const [teams, setTeams] = useState([]);
  const [activities, setActivities] = useState([]);
  const [current_user, setCurrent_user] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeams(data.teams);
        setActivities(data.activities);
        setCurrent_user(data.current_user);
      });
  }, []);

  let Component;
  switch (window.location.pathname) {
    default:
      Component = <AllTeams teams={teams} />;
      break;
    case "/AllTeams":
      Component = <AllTeams teams={teams} />;
      break;
    case "/Favourites":
      Component = <Favourites teams={teams} />;
      break;
    case "/Archived":
      Component = <Archived teams={teams} />;
      break;
  }

  return (
    <div className="Content">
      {Component}
      <div className="display_activities">
        <h2>Activity</h2>
        {activities.map((activity) => (
          <div key={activity.id}>
            <CardActivity activity={activity} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
