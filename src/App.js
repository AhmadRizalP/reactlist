import "./App.css";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React, { Component, Fragment } from "react";

import Beranda from "./Pages/Beranda";
import Galeri from "./Pages/Galeri";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <header>
            <a className="logo">ADIWIYATA</a>
            <div>
              <Link to="/" className="link">
                Beranda
              </Link>
              <Link to="/galeri" className="link">
                Galeri
              </Link>
            </div>
          </header>

          <Switch>
            <Route path="/" exact component={Beranda} />
            <Route path="/galeri" component={Galeri} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

export default App;
