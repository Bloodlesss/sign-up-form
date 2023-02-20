import React from "react";
import style from "./footerComponents.module.scss";
function FooterComponent() {
  return (
    <div className={style.footerContainer}>
      <p>
        © 2023 Jamal Saleh, All Api's used are OpenSource APIs and I do not Own
        anything
        <br />
        <a href="mailto:jamal.ngu@gmail.com"> jamal.ngu@gmail.com</a>{" "}
        phone:+96171308299
      </p>
    </div>
  );
}
export default FooterComponent;
