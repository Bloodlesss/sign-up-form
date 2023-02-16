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
            console.log("asd");
            return redirect("SignUp");
          }}
        />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
