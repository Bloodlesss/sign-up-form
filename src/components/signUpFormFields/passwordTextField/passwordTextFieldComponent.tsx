import { useState } from "react";
import { FieldsRegex } from "../../../enums/fields-regex";
import { passwordFieldPropsModel } from "../../../models/passwordFieldPropsModel";
import FormTextField from "../../formTextField";
import style from "./passwordTextFieldComponent.module.scss";
function PasswordTextFieldComponent(props: passwordFieldPropsModel) {
  const [focus, setFocus] = useState(false);
  return (
    <>
      {focus ? (
        <div className={style.popupInfo}>
          <h3>Password validation</h3>
          <hr></hr>
          <ul className={style.passwordUl}>
            <li>Should be a minimum of EIGHT characters</li>
            <li>Should contain at least one UPPERCASE letter</li>
            <li>Should contain at least one LOWERCASE letter</li>
            <li>Should not contain FIRST NAME</li>
            <li>Should not contain LAST NAME</li>
          </ul>
        </div>
      ) : null}
      <FormTextField
        label={"Password"}
        fieldName={"password"}
        isRequired
        isPassword
        regex={FieldsRegex.password}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        // validationRules={}
      />
    </>
  );
}
PasswordTextFieldComponent.defaultProps = {
  label: "Password",
  fieldName: "password",
  isRequired: false,
};
export default PasswordTextFieldComponent;
