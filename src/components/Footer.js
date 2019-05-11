import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center ">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <MDBBtn color="primary" social="fb">
              <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
            </MDBBtn>
            <MDBBtn color="info" social="tw">
              <MDBIcon fab icon="twitter" className="pr-1" /> Twitter
            </MDBBtn>
            <MDBBtn color="red darken-2" social="gplus">
              <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google +
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
