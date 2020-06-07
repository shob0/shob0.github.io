import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./intro/Main";
import Header from "./Header";
import Contact from "./Contact";
// import Blogs from "./Blogs/Blogs";
import projects from "./Projects/Projects";
import Notfound from "./notFound";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="main">
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route path="/blogs" component={Blogs} /> */}
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={projects} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
      <Footer />
      <hr />
    </div>
  );
};

export default App;
