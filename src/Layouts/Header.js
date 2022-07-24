import "../Assets/Styles/Header.css";
import PrintIcon from "@mui/icons-material/Print";
import React, { useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Header = () => {
  const [name, setName] = useState({});

  const handleFormChange = (label) => (e) => {
    e.preventDefault();
    setName({ ...name, [label]: e.target.value });
    console.log(name);
  };

  return (
    <div className="header">
      <div className="upper_header">
        <span className="uh_content1">NARWHAL</span>
        <span className="uh_content2">
          <li>
            <input
              type="text"
              placeholder="Enter your name..."
              name="nameField"
              onChange={handleFormChange("name")}
            />
          </li>
          <li>
            <PrintIcon fontSize="large" />
          </li>
          <li>Hello, {name.name}</li>
        </span>
      </div>
      <div className="lower_header">
        <div className="lh_content1">
          <span>
            <ApartmentIcon fontSize="large" />
            Teams
          </span>
          <button className="btn btn_create">CREATE NEW TEAMS</button>
        </div>
        <div className="lh_content2">
          <ul>
            <li>
              <a href="/AllTeams">All</a>
            </li>
            <li>
              <a href="/Favourites">Favourites</a>
            </li>
            <li>
              <a href="/Archived">Archived</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
