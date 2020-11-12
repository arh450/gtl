import React, { Component } from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";

import "./style.scss";

export default class index extends Component {
  render() {
    return (
      <>
        <Row className="mx-auto" id="intro">
          <Col md={10} className="mt-3 mx-auto text-center text-white">
            <Jumbotron id="jumbo">
              <Row className="mx-auto">
                <Col md={6} className="mx-auto p-2">
                  <h1>Welcome to Guess the Lines</h1>
                  <p>
                    Each week of the NFL season guess the lines of each game
                    before seeing the actual spread.
                  </p>
                  <p>Use the -/+ buttons to guess and then submit.</p>
                  <p>You are guessing as the home team.</p>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </>
    );
  }
}
