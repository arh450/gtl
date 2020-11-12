import React, { Component } from "react";
import InstructionCard from "../components/InstructionCard/index.js";
import MatchupCard from "../components/MatchupCard/index.js";

export default class Home extends Component {
  render() {
    return (
      <>
        <InstructionCard />
        <MatchupCard />
      </>
    );
  }
}
