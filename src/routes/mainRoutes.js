import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const Main = React.lazy(() => import("../pages/main"));
const SignUp = React.lazy(() => import("../pages/signUp"));

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Main" />} />
      <Route
        path="/SignUp"
        element={
          <React.Suspense fallback={<>...</>}>
            <SignUp />
          </React.Suspense>
        }
      />
      <Route
        path="/Main"
        element={
          <React.Suspense fallback={<>...</>}>
            <Main />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default MainRoutes;
