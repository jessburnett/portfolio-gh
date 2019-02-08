import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import './style.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <ul className="header">
            <li><NavLink to="/">Jess</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/portfolio">Projects</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </div>
          <footer>
            {/*eslint-disable-next-line*/}
            <ul className="social-footer">
              {/*eslint-disable-next-line*/}
              <li><a target="new" href="https://github.com/jessburnett"><i aria-hidden="true" class="teal github icon"></i></a></li>
              {/*eslint-disable-next-line*/}
              <li><a target="new" href="https://www.linkedin.com/in/jessicaburnett2019/"><i aria-hidden="true" class="teal linkedin icon"></i></a></li>
              {/*eslint-disable-next-line*/}
              <li><a target="new" href="mailto:jessica.burnett.tech@gmail.com"><i aria-hidden="true" class="teal envelope icon"></i></a></li>
            </ul>
          </footer>
        </div>
      </HashRouter>
    )
  }
}

export default App;