import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center ">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Partners</h5>
            <img
              style={{ width: "50%", height: "50%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1ope0pbWHk9L0rbd1m7obyUHNKkdvLU3l4UGQY_cGTMy2ZWe"
            />

            <img
              style={{ width: "50%", height: "50%" }}
              src="http://etunanytt.se/wp-content/uploads/2016/06/migrationsverket-logo.jpg"
            />
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
