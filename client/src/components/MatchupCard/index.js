import React, { Component } from "react";
import { Col, Row, Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import teamData from "../Data/teamData.json";

import "./style.scss";

const minus = <FontAwesomeIcon icon={faMinusCircle} />;
const plus = <FontAwesomeIcon icon={faPlusCircle} />;

export default class index extends Component {
  state = {
    tableBodyShow: "none",
    value: 0,
    positive: "",
  };

  decToggle = (event) => {
    event.preventDefault();
    this.setState({ tableBodyShow: "" });

    if (this.state.value > -30.5) {
      this.setState({ value: this.state.value - 0.5 });
    }
  };

  incToggle = (event) => {
    event.preventDefault();
    this.setState({ tableBodyShow: "" });

    if (this.state.value < 30.5) {
      this.setState({ value: this.state.value + 0.5 });
    }
  };

  render() {
    const team1 = {
      backgroundColor: "#97233F",
      boxShadow: `4px 2px 1.5px #000000`,
      textAlign: "center",
      marginTop: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "1em",
      width: "100%",
      maxWidth: "71px",
      padding: "20px",
    };

    const team2 = {
      backgroundColor: "#97233F",
      boxShadow: `4px 2px 1.5px #000000`,
      textAlign: "center",
      marginTop: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "1em",
      width: "100%",
      maxWidth: "71px",
      padding: "20px",
    };
    return (
      <>
        <i class="fas fa-minus-circle"></i>
        <Row className="mx-auto ">
          <Col md={5} className="mx-auto">
            <Table>
              <thead responsive="md">
                <tr>
                  <th className="leftSide"></th>
                  <th className="leftSide">
                    <p style={team1}>ARI</p>
                  </th>
                  <th className="leftSide">
                    <p className="text-center atSym">@</p>
                  </th>
                  <th className="leftSide">
                    <p style={team2}>ARI</p>
                  </th>
                  <th className="leftSide"></th>
                  <th className="rightSide">
                    <div className="d-flex justify-content-center buttonWrap">
                      <Button
                        variant="outline-danger"
                        className="mr-2"
                        id="decButton"
                        onClick={this.decToggle}
                      >
                        {minus}
                      </Button>
                      <Button
                        variant="outline-success"
                        id="incButton"
                        onClick={this.incToggle}
                      >
                        {plus}
                      </Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody style={{ display: this.state.tableBodyShow }}>
                <tr>
                  <th className="leftSide"></th>
                  <th className="leftSide"></th>
                  <th className="leftSide"></th>
                  <th className="leftSide">
                    <div className="d-flex justify-content-center">
                      {this.state.value > 0 ? (
                        <p
                          style={{
                            margin: "0px 0px 0px 0px",
                            textAlign: "center",
                            verticalAlign: "baseline",
                          }}
                        >
                          ARI by +{this.state.value}
                        </p>
                      ) : this.state.value === 0 ? (
                        <p
                          style={{
                            margin: "0px 0px 0px 0px",
                            textAlign: "center",
                            verticalAlign: "baseline",
                          }}
                        >
                          EVEN
                        </p>
                      ) : (
                        <p
                          style={{
                            margin: "0px 0px 0px 0px",
                            textAlign: "center",
                            verticalAlign: "baseline",
                          }}
                        >
                          ARI by {this.state.value}
                        </p>
                      )}
                    </div>
                  </th>
                  <th className="leftSide"></th>
                  <th className="rightSide">
                    <div>
                      <Button variant="secondary" size="sm" block>
                        Submit
                      </Button>
                    </div>
                  </th>
                </tr>
              </tbody>
            </Table>
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

        {/* {teamData.map((team, idx) => (
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
          </Col> */}
      </>
    );
  }
}
