import React from "react";
import "./footer.css";


export default function Footer() {
  return (
    <div>
            <div className="d-flex justify-content-center main-footer">
                <a href="https://www.linkedin.com/in/awsiegfried/" target="_blank">
                    <img src="https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-512.png" className="linkedin" />
                </a>
                <a href="https://github.com/awsiegfried" target="_blank">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" className="github mt-3"/>
                </a>
                <a href="https://www.instagram.com/awsiegfried/" target="_blank">
                    <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" class="instagram"/>
                </a>
            </div>
    </div>
  );
}
