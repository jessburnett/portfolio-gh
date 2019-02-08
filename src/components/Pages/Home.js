import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <div className="intro">
        {/*I built this from the ground up - Jessica Burnett */}
        <img alt="Jessica Burnett" src="/images/jess.jpg" class="ui medium circular image" />
        <h2 className="intro-header">Jessica Burnett</h2>
        <div className="tagline">Software Architect - UX/UI Specialist - IT Consultant</div>
      </div>
    );
  }
}

export default Home;