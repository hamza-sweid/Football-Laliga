<template>
  <div>
    <!-- ==== landing section start==== -->
    <!-- <section class="landing">
      <div class="overlay"></div>
      <div class="landing-content">
        <h1>
          Contact Us
        </h1>
        <p>Home - <span>Contact Us</span></p>
      </div>
    </section> -->
    <!-- ==== landing section end==== -->

    <!-- ==== contact-us section start==== -->
    <section class="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-6 med media">
            <h3>Don't Be a Stranger</h3>
            <h3>Just Say Hello!</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              dolorum sint est dolor, non dolorem ipsam eius sequi fugit
              praesentium quam alias ea necessitatibus nam aliquam odio quo modi
              error.
            </p>
            <div class="media-info">
              <i class="fa fa-envelope fa-lg"></i>
              <div class="info">
                <h6 class="font-weight-bold">Email :</h6>
                <p>
                  <a href="mailto:username@domain.com">username@domain.com</a>
                </p>
              </div>
            </div>
            <div class="media-info">
              <i class="fa fa-phone fa-lg"></i>
              <div class="info">
                <h6 class="font-weight-bold">Phone :</h6>
                <p>
                  <a href="tel:000123456789">000 1234 56789</a> -
                  <a href="tel:000123456789">000 1234 56789</a>
                </p>
              </div>
            </div>
            <div class="media-info">
              <i class="fa fa-map-marker fa-lg"></i>
              <div class="info">
                <h6 class="font-weight-bold">Location :</h6>
                <p>Street 55 City USA</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 message">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control form-control-sm"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
                <input
                  type="subject"
                  class="form-control form-control-sm"
                  placeholder="Subject"
                />
              </div>
              <div class="form-group">
                <textarea
                  type="message"
                  class="form-control form-control-sm"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn my-btn btn-block">
                Submit Now
              </button>
            </form>
            <div class="contact-box">
              <p class="pt-3">Contact With Us :</p>
              <div class="contact-box-media">
                <a href="https://www.facebook.com"
                  ><i class="fa fa-facebook fa-lg"></i
                ></a>
                <a href="https://www.fa-instagram.com"
                  ><i class="fa fa-instagram fa-lg"></i
                ></a>
                <a href="https://www.twitter.com"
                  ><i class="fa fa-twitter fa-lg"></i
                ></a>
                <a href="https://www.youtube.com"
                  ><i class="fa fa-youtube fa-lg"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895717097!2d-74.26056075575082!3d40.69766840208471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1590938536899!5m2!1sen!2s"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
};
</script>

<style scooped>
/*
-----------------------------------------
landing section start
-----------------------------------------
*/
/* .landing {
  background: url(../assets/images/contact-us/landing.jpg) no-repeat;
  background-size: cover;
  height: 60%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  position: relative;
}

.landing .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.landing .landing-content {
  z-index: 2;
  color: #fff;
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.landing .landing-content h1 {
  color: #fff;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 20px 0;
  text-indent: 20px;
}

.landing .landing-content p {
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
}

.landing .landing-content p span {
  color: #ee1f33;
}

@media (max-width: 768px) {
  .landing .landing-content h1 {
    font-size: 5vw;
    margin: 28px 0;
  }

  .landing .landing-content p {
    font-size: 2.3vw;
    margin: 2px 0;
  }
} */
/*
-----------------------------------------
landing section end
-----------------------------------------
*/

/*
-----------------------------------------
contact section start
-----------------------------------------
*/
.contact {
  padding: 50px 0;
  background-color: #f9f9f9;
}

.contact h3 {
  font-weight: bold;
}

.contact h3:nth-child(2) {
  color: #ee1f33;
}

.contact .media {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0 50px;
}

.contact .media .media-info {
  display: flex;
  border-bottom: 1px dotted #222;
  width: 100%;
  margin-top: 20px;
}

.contact .media .media-info:last-child {
  border: none;
}

.contact .media .media-info .info {
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 15px;
}

.contact .media .media-info i {
  color: #ee1f33;
  background-color: #eee;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  margin-top: 10px;
}

.contact .message {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.contact .message form {
  width: 90%;
  padding: 10px 20px;
}

.contact .message form .form-control {
  padding: 25px 10px;
  border-radius: 20px;
  box-shadow: 0 0 5px #c7c7c7;
}

.contact .message form .form-control:focus {
  border-color: none;
  box-shadow: 0 0 5px #6a9dd4;
}

.contact .message .contact-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 90%;
  margin: 10px auto;
  padding: 5px;
  background-color: #3d4f90;
  color: #fff;
  letter-spacing: 1px;
}

.contact .message .contact-box i {
  padding: 13px;
  border-radius: 50%;
}

.contact .message .contact-box i:hover {
  color: inherit;
}

.contact .message .contact-box .fa-facebook {
  background-color: #3776ab;
}

.contact .message .contact-box .fa-instagram {
  background-color: #df1fca;
}

.contact .message .contact-box .fa-twitter {
  background-color: #30a4e1;
}

.contact .message .contact-box .fa-youtube {
  background-color: #e71012;
}

.contact .map {
  margin: 25px auto;
  display: flex;
}

.contact .map iframe {
  width: 80vw;
  height: 40vw;
}
/*
-----------------------------------------
contact section end
-----------------------------------------
*/
</style>
