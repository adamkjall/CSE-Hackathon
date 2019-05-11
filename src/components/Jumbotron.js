import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon
} from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBJumbotron style={{ padding: 0 }}>
  
      <MDBCol
        className="text-white text-center py-5 px-4"
        style={{
          backgroundImage: `url(https://lh5.googleusercontent.com/6_KLr7jkcE4hK9f5O8rb7luqOWlL24d0tKGp7s97CxVDZ5Nk0Vqt8EzQY78rGKrlicJqzSnNfx_az8DaoIUVmO4iO9ipjxx3706Yp2ZhozWCuFY76afc_KfPcbxqannM_wF-du_k)`
        }}
      >
       
        <MDBCol className="py-5">
        
          <MDBCardTitle className="display-4 pt-3 m-5 font-bold">
            Start your tech career right now!
          </MDBCardTitle>
          <h4 className="mx-5 mb-5 px-5">
          Sweden’s innovative and expansive IT sector is facing a future skills shortage, and education and immigration reforms are part of the remedy.
           
          </h4>
          <MDBBtn outline color="white" className="mb-5">
            <MDBIcon icon="clone" className="mr-2" /> Read more
          </MDBBtn>
        </MDBCol>
      </MDBCol>
    </MDBJumbotron>
  );
};

export default JumbotronPage;
