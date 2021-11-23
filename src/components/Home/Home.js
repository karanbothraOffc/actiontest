import React from "react";
import "./Home.css";
function Home() {
  return (
    <header class="header navbar-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="nav-inner">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="index.html">
                  <img src="https://www.shriramgi.com/images/logo.jpg" alt="Logo" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a
                        class="page-scroll dd-menu collapsed"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Products
                      </a>
                      <ul class="sub-menu collapse" id="submenu-1-1">
                        <li class="nav-item">
                          <a href="about-us.html">Car Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Two Wheeler Insurance </a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Home Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Travel Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Personal Insurance</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a
                        class="page-scroll dd-menu collapsed"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Products
                      </a>
                      <ul class="sub-menu collapse" id="submenu-1-1">
                        <li class="nav-item">
                          <a href="about-us.html">Car Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Two Wheeler Insurance </a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Home Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Travel Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Personal Insurance</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a
                        class="page-scroll dd-menu collapsed"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Products
                      </a>
                      <ul class="sub-menu collapse" id="submenu-1-1">
                        <li class="nav-item">
                          <a href="about-us.html">Car Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Two Wheeler Insurance </a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Home Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Travel Insurance</a>
                        </li>
                        <li class="nav-item">
                          <a href="about-us.html">Personal Insurance</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="javascript:void(0)">
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="javascript:void(0)">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div class="button">
                    <a href="javascript:void(0)" class="btn white-bg mouse-dir">
                      Get a Quote <span class="dir-part"></span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
