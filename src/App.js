import React, { Component } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBView,
  MDBMask
} from "mdbreact";
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
          <MDBRow>
            <MDBContainer>
              <MDBView className="mt-2">
                <img
                  src="https://lh5.googleusercontent.com/6_KLr7jkcE4hK9f5O8rb7luqOWlL24d0tKGp7s97CxVDZ5Nk0Vqt8EzQY78rGKrlicJqzSnNfx_az8DaoIUVmO4iO9ipjxx3706Yp2ZhozWCuFY76afc_KfPcbxqannM_wF-du_k"
                  class="img-fluid"
                  alt="sample image"
                />
                <MDBMask className="flex-center" overlay="black-strong">
                  <p className="white-text">Everything is awesome</p>
                </MDBMask>
              </MDBView>
            </MDBContainer>
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
    );
  }
}

export default App;
