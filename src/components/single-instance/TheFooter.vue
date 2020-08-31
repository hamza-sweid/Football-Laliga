<template>
  <div>
    <footer class="footer">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4 contact-us">
            <h6>CONTACT US</h6>
            <p>Moorfields Eye Charity</p>
            <p>234 City Road</p>
            <p>London EC1V 2PD</p>
            <p>
              <span>Phone : </span>
              <a href="tel:000123456789">000 1234 6789</a>
            </p>
            <p>
              <a href="mailto:hamza.sweid963@gmail.com">
                <span>Email : </span>000 1234 56789
              </a>
            </p>
          </div>
          <div class="col-sm-4 lets-talk">
            <h6>LET'S TALK</h6>
            <div class="media">
              <a href="https://www.facebook.com/" target="blank">
                <i class="fa fa-facebook my-1"></i>
                Facebook
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <i class="fa fa-instagram my-1"></i>
                Instagram
              </a>
              <a href="https://www.twitter.com/" target="blank">
                <i class="fa fa-twitter my-1"></i>
                Twitter
              </a>
              <a href="https://www.youtube.com/" target="blank">
                <i class="fa fa-youtube my-1"></i>
                Youtube
              </a>
            </div>
          </div>
          <div class="col-sm-4 links">
            <h6>USEFUL LINKS</h6>
            <a href="">
              <i class="fa fa-caret-right"></i>
              Charities
            </a>
            <a href="">
              <i class="fa fa-caret-right"></i>
              Classes
            </a>
            <a href="">
              <i class="fa fa-caret-right"></i>
              Conferences
            </a>
            <a href="">
              <i class="fa fa-caret-right"></i>
              Education Events
            </a>
            <a href="">
              <i class="fa fa-caret-right"></i>
              About Us
            </a>
            <a href="">
              <i class="fa fa-caret-right"></i>
              Press
            </a>
            <a href="">
              <i class="fa fa-caret-right"></i>
              Contact Us
            </a>
            <a href="">
              <i class="fa fa-caret-right"></i>
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      &COPY; <span>INOCCENT </span>2020. All Right Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
.footer {
  padding: 50px 0;
  /* background: url(../images/home/footer.jpg) no-repeat; */
  background-size: cover;
  position: relative;
  color: #eee;
}

.footer * {
  font-size: 14px;
}

.footer .overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.97);
  width: 100%;
  height: 100%;
}

.footer h6 {
  color: #fff;
  font-weight: bold;
  margin-bottom: 17px;
}

.footer .contact-us,
.footer .lets-talk,
.footer .links {
  display: block;
  margin-bottom: 20px;
}

.footer .contact-us p {
  margin-bottom: 5px;
}

.footer .contact-us span {
  color: #ee1f33;
}

.footer .lets-talk .media {
  display: flex;
  flex-direction: column;
}

.footer .lets-talk .media i {
  padding: 8px;
  border-radius: 50%;
  margin: 0 8px;
}

footer .lets-talk .media i:hover {
  color: inherit;
}

.footer .lets-talk .media .fa-facebook {
  background-color: #3776ab;
}

.footer .lets-talk .media .fa-instagram {
  background-color: #df1fca;
}

.footer .lets-talk .media .fa-twitter {
  background-color: #30a4e1;
}

.footer .lets-talk .media .fa-youtube {
  background-color: #e71012;
}

.footer .links {
  display: flex;
  flex-direction: column;
  margin: 0;
}

.footer .links i {
  color: #ee1f33;
}

.footer .links a:hover {
  color: #ee1f33;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer * {
    font-size: 12px;
  }
  .footer a {
    margin: 3px 0;
  }
}

@media (max-width: 576px) {
  .footer {
    background-image: none;
    text-align: center;
    letter-spacing: 1px;
  }
  .footer * {
    font-size: initial;
  }
  .footer .contact-us,
  .footer .lets-talk,
  .footer .links {
    margin-top: 35px;
  }
  .footer .lets-talk {
    display: inline-grid;
    text-align: center;
  }
}

.copyright {
  background-color: #000;
  text-align: center;
  color: #fff;
  padding: 20px 0;
  font-size: 13px;
}

.copyright span {
  color: #ee1f33;
}
</style>
