import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "../enums/routes";
const Main = React.lazy(() => import("../pages/main"));
const SignUp = React.lazy(() => import("../pages/signUp"));

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Main" />} />
      {routes.map((route, index) => (
        <Route
          key={`route-project-${index}`}
          path={route.path}
          element={route.element}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default MainRoutes;
