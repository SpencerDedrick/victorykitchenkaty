import React, { useState, setState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landing1 from "./components/landing/landing1";
import Landing2 from "./components/landing/landing2";
import Landing3 from "./components/landing/landing3";
import Footer from "./components/footer/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Gallery1 from "./components/gallery/gallery";
import Blog from "./components/blog/Blog";

library.add(fab, faEnvelope);

function App() {
  const [route, setRoute] = useState("home");

  function changeRoute(route) {
    setRoute(route);
  }

  return (
    <div className="App">
      <Navbar changeRoute={changeRoute} />
      {route === "home" ? (
        <div>
          <Landing1 changeRoute={changeRoute} />
          {/*  <Landing3 changeRoute={changeRoute} /> */}
        </div>
      ) : route === "about" ? (
        <Landing2 />
      ) : route === "gallery" ? (
        <Gallery1 changeRoute={changeRoute} />
      ) : route === "support" ? (
        <Landing3 />
      ) : (
        <div> other</div>
      )}

      <Footer />
      <div id="fb-root"></div>
    </div>
  );
}

export default App;
