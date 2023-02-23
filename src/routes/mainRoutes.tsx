import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "../constants/routes";
import Main from "../pages/main";
import SignUp from "../pages/signUp";
const routes = [
  {
    path: "/Main",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Main />
      </React.Suspense>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <React.Suspense fallback={<>...</>}>
        <SignUp />
      </React.Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Main />
      </React.Suspense>
    ),
  },
];
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
