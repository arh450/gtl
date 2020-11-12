import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import teamData from "../Data/teamData.json";

import "./style.scss";

export default class index extends Component {
  state = {};

  render() {
    return (
      <>
        <Row className="mx-auto ">
          <Col md={4} className="mx-auto">
            {teamData.map((team, idx) => (
              <Row className="bg-success mt-2" key={idx}>
                <Col md={6}>
                  <p
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
                      color: "#FFFFFF",
                    }}
                  >
                    {team.teamAbv}
                  </p>
                  <p className="text-center">@</p>
                  <p
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
                      color: "#FFFFFF",
                    }}
                  >
                    {team.teamAbv}
                  </p>
                </Col>
                <Col md={5} className="mx-auto">
                  <Row className="mx-auto">
                    <Col md={12}>
                      <Button variant="primary" className="mt-2 mr-2">
                        +
                      </Button>
                      <Button variant="primary" className="mt-2">
                        +
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mx-auto">
                    <Col md={12}>
                      <Button block variant="primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>

        {/* <ul className="list-group" id="main">
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
        </ul> */}
      </>
    );
  }
}
