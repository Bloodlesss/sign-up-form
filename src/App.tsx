import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import MainRoutes from "./routes/mainRoutes";
function App() {
  return (
    <>
      <div className="header">title</div>
      <MainRoutes></MainRoutes>
      <div className="footer">footer</div>
    </>
  );
}

export default App;
