import React from "react";
import MainRoutes from "../../routes/mainRoutes";
import styles from "./Main.module.scss";
function Main() {
  return (
    <>
      <div className="header">title</div>
      <MainRoutes></MainRoutes>
      <div className="footer">footer</div>
    </>
  );
}
export default Main;
