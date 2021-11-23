import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer class="footer">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-5 col-12">
              <div class="f-about single-footer">
                <div class="logo">
                  <a href="index.html">
                    <img src="https://www.shriramgi.com/images/logo.jpg" alt="#" />
                  </a>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry.
                </p>
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-behance-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-7 col-12">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-6">
                  <div class="single-footer f-link">
                    <h3>Company</h3>
                    <ul>
                      <li>
                        <a href="#">About Comapny</a>
                      </li>
                      <li>
                        <a href="#">World Wide Clients</a>
                      </li>
                      <li>
                        <a href="#">Happy People’s</a>
                      </li>
                      <li>
                        <a href="#">Winning Awards</a>
                      </li>
                      <li>
                        <a href="#">Company Statics</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-6">
                  <div class="single-footer f-contact f-link">
                    <h3>Contact Us</h3>
                    <p>Untrammelled & nothing preven our being able</p>
                    <ul class="footer-contact">
                      <li>
                        <i class="lni lni-phone"></i> <a href="#">footer-contact</a>
                      </li>
                      <li>
                        <i class="lni lni-envelope"></i>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </li>
                      <li>
                        <i class="lni lni-map-marker"></i> Broklyn Street USA
                      </li>
                      <li>
                        <i class="lni lni-world"></i> <a href="#">www.yoursite.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-6">
                  <div class="single-footer f-contact f-link">
                    <h3>Contact Us</h3>
                    <p>Untrammelled & nothing preven our being able</p>
                    <ul class="footer-contact">
                      <li>
                        <i class="lni lni-phone"></i> <a href="#">Endorsement</a>
                      </li>
                      <li>
                        <i class="lni lni-envelope"></i>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </li>
                      <li>
                        <i class="lni lni-map-marker"></i> Broklyn Street USA
                      </li>
                      <li>
                        <i class="lni lni-world"></i> <a href="#">www.yoursite.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="footer-bottom">
        <div class="container">
          <div class="inner">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="left">
                  <p>
                    Designed and Developed by
                    <a href="https://graygrids.com/" rel="nofollow" target="_blank">
                      GrayGrids
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="right">
                  <p>All Right Reserved Design By Bizfinity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
