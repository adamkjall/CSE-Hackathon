import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardGroup,
  MDBIcon,
  MDBNavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import "./index.css";
import logo from "./logo.png";
import Testimonials from "./components/Testimonials";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <MDBRow>
            <div className="container-fluid">
              <Jumbotron />
            </div>
          </MDBRow>

          <MDBContainer>
            <MDBRow>
              <div className="text-center mx-4">
                <h1>Title</h1>
                <p className="text-left">
                  A recent report from the Swedish IT & Telecom Industries
                  concluded that the IT industry faces a deficit of more than
                  70,000 IT professionals by 2022 unless urgent measures are
                  taken to attract more foreign workers with IT and digital
                  technology skills.
                </p>
              </div>
            </MDBRow>
            <hr />
            <MDBRow id="categories" className="mb-4">
              <MDBCol md="4" className="mt-3">
                <MDBCol size="2" md="2" className="float-left">
                  <MDBIcon icon="css3" brand className="pink-text" size="2x" />
                </MDBCol>
                <MDBCol size="10" md="8" lg="10" className="float-right">
                  <h4 className="font-weight-bold">Courses</h4>
                  <p className="grey-text">
                    Animations, colours, shadows, skins and many more! Get to
                    know all our css styles in one place.
                  </p>
                  <MDBNavLink
                    tag="button"
                    className="btn btn-sm indigo darken-3 text-white"
                    to="css"
                  >
                    Learn more
                  </MDBNavLink>
                </MDBCol>
              </MDBCol>
              <MDBCol md="4" className="mt-3">
                <MDBCol size="2" md="2" className="float-left">
                  <MDBIcon icon="bars" className="pink-text" size="2x" />
                </MDBCol>
                <MDBCol size="10" md="8" lg="10" className="float-right">
                  <h4 className="font-weight-bold">Internship</h4>
                  <p className="grey-text">
                    Ready-to-use navigation layouts, navbars, breadcrumbs and
                    much more! Learn more about our navigation components.
                  </p>
                  <MDBNavLink
                    tag="button"
                    className="btn btn-sm indigo darken-3 text-white"
                    to="/navigation"
                  >
                    Learn more
                  </MDBNavLink>
                </MDBCol>
              </MDBCol>
              <MDBCol md="4" className="mt-3">
                <MDBCol size="2" md="2" className="float-left">
                  <MDBIcon icon="edit" className="blue-text" size="2x" />
                </MDBCol>
                <MDBCol size="10" md="8" lg="10" className="float-right">
                  <h4 className="font-weight-bold">Roadmaps</h4>
                  <p className="grey-text">
                    Inputs, autocomplete, selecst, date and time pickers.
                    Everything in one place is ready to use!
                  </p>
                  <MDBNavLink
                    tag="button"
                    className="btn btn-sm indigo lighten-2 text-white"
                    to="/forms"
                  >
                    Learn more
                  </MDBNavLink>
                </MDBCol>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCardGroup deck className="m-3">
                <MDBCol lg="4" className="text-center">
                  <Card
                    title="Top 5 reasons to have a career in tech"
                    text="Text text text text text text"
                    image="https://static.teamviewer.com/resources/2018/07/access-office-resources.jpg"
                  />
                </MDBCol>
                <MDBCol lg="4" className="text-center">
                  <Card
                    title="What is computer programming?"
                    text="Text text text text text text"
                    image="https://www.itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862-768x636.jpg"
                  />
                </MDBCol>
                <MDBCol lg="4" className="text-center">
                  <Card
                    title="Follow your interests."
                    text="Text text text text text text"
                    image="https://cdn-images-1.medium.com/max/1200/1*BHN1sCwtylPmj9ZdQvYgMg.png"
                  />
                </MDBCol>
              </MDBCardGroup>
            </MDBRow>
            <hr />
            <MDBRow>
              <Testimonials />
            </MDBRow>
          </MDBContainer>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
