import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./firebase/auth";
import ScrollToTop from "./scroll";

import IndexApp from "../views/index";
import HackathonApp from "../views/hackathon";
import CodingContestApp from "../views/coding-contest";
import RegisterApp from "../views/register";

function App() {
  return (
    <AuthProvider>
      <HashRouter basename="/Sithum/">
        <ScrollToTop />
        <Switch>
          <Route path={["/", "/home"]} exact component={IndexApp} />
          <Route
            path={["/hackathon", "/hack"]}
            exact
            component={HackathonApp}
          />
          <Route
            path={[
              "/contest",
              "/code",
              "/codingContest",
              "/coding-contest",
              "/codingcontest",
            ]}
            exact
            component={CodingContestApp}
          />
          <Route
            path={["/register", "/signup", "/sign-up"]}
            exact
            component={RegisterApp}
          />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
