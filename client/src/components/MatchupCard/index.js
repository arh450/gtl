import React, { Component } from "react";
import teamData from "../Data/teamData.json";

import "./style.scss";

export default class index extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className="list-group" id="main">
          {teamData.map((team, idx) => (
            <li
              key={idx}
              className="list-group-item text-white"
              style={{
                backgroundColor: team.color1,
                boxShadow: `4px 2px 1.5px ${team.color2}`,
                textAlign: "center",
                marginTop: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "1em",
                width: "100%",
                maxWidth: "71px",
                padding: "20px",
              }}
            >
              {team.teamAbv}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
