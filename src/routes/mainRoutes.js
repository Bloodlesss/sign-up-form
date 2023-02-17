import React from "react";
import SignUp from "../pages/signUp";
import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
import FormComponent from "../components/form/FormComponent";
function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/SignUp" />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Form" element={<FormComponent />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
