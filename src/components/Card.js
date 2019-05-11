import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCardText
} from "mdbreact";

class Card extends React.Component {
  
  render() {
    return (
      <MDBCard className="mt-3">
        <MDBCardImage
          src={this.props.image}
          alt="MDBCard image cap"
          top
          hover
        />
        <MDBCardBody>
          <MDBCardTitle tag="h5">{this.props.title}</MDBCardTitle>
          <MDBCardText>
            {this.props.text}
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Card;
