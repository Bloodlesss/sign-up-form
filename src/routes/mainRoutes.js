import React from "react";
import SignUp from "../pages/signUp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          action={() => {
            return redirect("/SignUp");
          }}
        />
        <Route path="/SignUp" component={SignUp} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
