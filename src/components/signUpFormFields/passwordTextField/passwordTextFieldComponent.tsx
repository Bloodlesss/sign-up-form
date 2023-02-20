import { useState } from "react";
import { FieldsRegex } from "../../../enums/fields-regex";
import { passwordFieldPropsModel } from "../../../models/passwordFieldPropsModel";
import FormTextField from "../../formTextField";
import style from "./passwordTextFieldComponent.module.scss";
function PasswordTextFieldComponent(props: passwordFieldPropsModel) {
  const [focus, setFocus] = useState(false);
  const [fullfilled, setFullfilled] = useState();
  return (
    <div className={style.container}>
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
      {true ? (
        <div className={style.popupInfo}>
          <h3>Password validation</h3>
          <hr></hr>
          <ul className={style.passwordUl}>
            <li className={style.notFulfilled}>Should be a minimum of EIGHT characters</li>
            <li className={style.notFulfilled}>Should contain at least one UPPERCASE letter</li>
            <li className={style.notFulfilled}>Should contain at least one LOWERCASE letter</li>
            <li className={style.notFulfilled}>Should not contain FIRST NAME</li>
            <li className={style.notFulfilled}>Should not contain LAST NAME</li>
          </ul>
        </div>
      ) : null}

    </div>
  );
}
function ValidatePassword() {

}
PasswordTextFieldComponent.defaultProps = {
  label: "Password",
  fieldName: "password",
  isRequired: false,
};
export default PasswordTextFieldComponent;
