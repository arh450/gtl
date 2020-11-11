import React, { Component } from "react";
import teamData from "../Data/teamData.json";

export default class index extends Component {
  state = {};

  render() {
    return (
      <>
        <ul>
          {teamData.map((team, idx) => (
            <li
              key={idx}
              style={{
                backgroundColor: team.color1,
                color: "#FFFFFF",
                boxShadow: `4px 2px 1.5px ${team.color2}`,
                // border: `2px solid ${team.color3}`,
                marginTop: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "1em",
                width: "100%",
                maxWidth: "71px",
                padding: "20px",
              }}
            >
              {team.teamName} ({team.teamAbv})
            </li>
          ))}
        </ul>
      </>
    );
  }
}
