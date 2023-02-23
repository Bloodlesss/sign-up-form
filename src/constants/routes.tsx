import React from "react";
import Main from "../pages/main/Main";
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
export default routes;
