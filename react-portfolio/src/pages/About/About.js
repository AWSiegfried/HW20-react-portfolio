import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="main">
      <div className="row mt-5">
        <div id="one-section" className="col-12 col-xl-12 pl-xl-n12">
          <div>
            <h1>About Me</h1>
            <p class="bio">
              Since graduating from UCLA in 2017 I've worked biz dev for very
              early-stage Silicon Beach tech startups (specifically ad tech).
              It's been absurdly challenging (like being told to make the
              company worth $100MM in two years with literally a $0
              customer-aquisition-cost challenging) but significantly rewarding.
              Working closely (in execution and literal proximity) with several
              dev teams over the past few years has given me a decent idea of
              what the dev life of a tech startup worker is like. I've learned a
              lot of their metanarratives, culural quirks, work pace as well as
              actual projects and realized that that fits my personality much
              better than the biz dev side. So I'm extremely excited to begin
              down the coding trail towards our inevitable replacement by
              functional (sentient or not) AI.
              <span>Languages:</span>{" "}
              JavaScript, ES6+, CSS3, HTML5
              
                {" "}
                <span >
                  Applications & Tools:
                </span>{" "}
                MySQL, MongoDB, GitHub, Node, Express, jQuery, JSCharting,
                Bootstrap
               Also, my other full time job is as the
              frontman/writer/manager/social media intern for the progessive
              death metal band Deified. Check us out on Spotify if you like
              operatic, orchestrated, bipolar death metal (FFO Devin Townsend,
              Gojira, Bach).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
