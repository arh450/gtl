import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import "./style.scss";

export default class index extends Component {
  render() {
    return (
      <>
        <Navbar id="mainNav">
          <Navbar.Brand href="/" id="brand">
            GTL
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}
