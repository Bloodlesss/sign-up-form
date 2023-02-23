import { Tabs } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import routes from "../../constants/routes";
import { LinkTab } from "../linkTabs";
import style from "./HeaderComponent.module.scss";
function HeaderComponent() {
  const location = useLocation();
  const index = routes.map((route) => route.path).indexOf(location.pathname);
  return (
    <div data-testid={"test-header"} className={style.headerContainer}>
      <h1>Welcome to my website!</h1>
      <div>
        <Tabs value={index} aria-label="nav tabs example">
          <LinkTab value={0} label="Main" href="/Main" />
          <LinkTab value={1} label="SignUp" href="/SignUp" />
        </Tabs>
      </div>
    </div>
  );
}

export default HeaderComponent;
