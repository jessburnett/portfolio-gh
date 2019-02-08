import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Me</h1>
        <div className="ui grid">
          <div className="row">
            <div className="eight wide computer sixteen wide mobile column">
              <p>
                I have 10+ years of experience as a software engineer, entrepreneur, and team builder.
              </p>
              <p>
                I'm a hands-on technical leader who has built
                software products and development teams from the ground up, run large
                engineering teams, and provided
                guidance at the executive and board level.  I'm
                motivated by product success and business growth,
                not technology for technology's sake.
            </p>
              <p>
                I'm always interested in becoming a better technology leader, and
                meeting interesting people in NYC.
            </p>
              <p>
                <a href="https://www.linkedin.com/in/jessicaburnett2019/">See my LinkedIn profile</a> for more career details.
            </p>
            </div>
            <div className="eight wide computer sixteen wide mobile column">
              <h2 className="highlights">Highlights</h2>
              <ul>
                <li>Project at Rice University made <a href="http://business.time.com/2012/08/10/free-textbooks-shaking-up-higher-education/">Time</a> magazine</li>
                <li>Chair of technical leadership council for <a href="http://www.brainchildinnovation.us/">BrainChild Innovations</a></li>
                <li>Master of bringing products in-house and building in-house development teams</li>
                <li>I started coding when I was twelve and have a dedicated passion for technology and Humanity.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;