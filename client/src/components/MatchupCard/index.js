import React, { Component } from "react";
import teamData from "../Data/teamData.json";

export default class index extends Component {
  state = {};

  render() {
    return (
      <>
        <ul>
          {teamData.map((team, idx) => (
            <li key={idx}>
              {team.teamName} ({team.teamAbv})
            </li>
          ))}
        </ul>
      </>
    );
  }
}
