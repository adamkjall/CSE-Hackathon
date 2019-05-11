import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <MDBRow className="mb-4">
            <img
              src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBRow>

          <MDBRow center style={{ height: "100vh" }}>
            <MDBCol middle="true" sm="8" className="text-center">
              <img src={logo} alt="logo" style={{ width: "10rem" }} />
              <h1>Welcome to Your MDB React App</h1>
              <p className="mb-2">
                The application is configured and ready to import our
                components.
              </p>
              <MDBBtn
                href="https://mdbootstrap.com/docs/react/"
                target="blank"
                color="light-blue"
              >
                <strong>Check out our docs!</strong>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <Footer />
        </div>
      </Router>