import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="main">
      <div className="row mt-5">
        <div id="one-section" className="col-12 col-xl-12 pl-xl-n12">
          <h1>Contact Info</h1>
          <div className="contact-subtitle">
            <div className="row">
              <div className="contact col-xs-12 col-md-5 col-lg-5">
                <h4>Professional</h4>
                <p>
                  <a href="https://github.com/AWSiegfried" target="_blank">
                    Github
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/alexander-wolfgang-siegfried-0565704a/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href="./Assets/Images/resume.pdf" download target="_blank">
                    Download Resume
                  </a>
                </p>
                <p>awsiegfried@gmail.com</p>
              </div>
              <div className="col-xs-12 col-md-2 col-lg-2"></div>
              <div className="contact col-xs-12 col-md-5 col-lg-5">
                <h4>Personal</h4>
                <p>
                  <a
                    href="https://www.instagram.com/awsiegfried/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/alex.siegfried.52/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </p>
                <p>
                  <a href="https://linktr.ee/deified/" target="_blank">
                    Music
                  </a>
                </p>
                <p> 484-788-1741</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
