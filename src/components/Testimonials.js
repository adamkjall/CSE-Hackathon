import React from "react";

class Testimonials extends React.Component {
  render() {
    return (
      <section class="team-section text-center my-5">
        <h2 class="h1-responsive font-weight-bold my-5">Testimonials v.3</h2>

        <p class="dark-grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        <div class="row text-center">
          <div class="col-md-4 mb-md-0 mb-5">
            <div class="testimonial">
              <div class="avatar mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </div>

              <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
              <h6 class="font-weight-bold blue-text my-3">Web Designer</h6>
              <p class="font-weight-normal dark-grey-text">
                <i class="fas fa-quote-left pr-2" />Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Quod eos id officiis hic tenetur
                quae quaerat ad velit ab hic tenetur.
              </p>

              <div class="orange-text">
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star-half-alt"> </i>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-md-0 mb-5">
            <div class="testimonial">
              <div class="avatar mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </div>

              <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
              <h6 class="font-weight-bold blue-text my-3">Graphic Designer</h6>
              <p class="font-weight-normal dark-grey-text">
                <i class="fas fa-quote-left pr-2" />Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid commodi.
              </p>

              <div class="orange-text">
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="testimonial">
              <div class="avatar mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </div>

              <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
              <h6 class="font-weight-bold blue-text my-3">UX Designer</h6>
              <p class="font-weight-normal dark-grey-text">
                <i class="fas fa-quote-left pr-2" />At vero eos et accusamus et
                iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti.
              </p>

              <div class="orange-text">
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="far fa-star"> </i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
