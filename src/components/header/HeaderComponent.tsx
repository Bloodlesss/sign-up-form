import { Tabs } from "@mui/material";
import React, { useState } from "react";
import { LinkTab } from "../linkTabs";
import style from "./HeaderComponent.module.scss";
function HeaderComponent() {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div data-testid={"test-header"} className={style.headerContainer}>
      <h1>Welcome to my website!</h1>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/" />
          <LinkTab label="SignUp" href="/SignUp" />
          <LinkTab label="Main" href="/Main" />
        </Tabs>
      </div>
    </div>
  );
}

export default HeaderComponent;
