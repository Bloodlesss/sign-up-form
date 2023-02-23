import { ChangeEvent, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FieldsRegex } from "../../../constants/fields-regex";
import { passwordFieldPropsModel } from "../../../models/passwordFieldPropsModel";
import { passwordFullfilledModel } from "../../../models/passwordFullfilledModel";
import { UserInfo } from "../../../models/userInfoModel";
import FormTextField from "../../formTextField";
import style from "./passwordTextFieldComponent.module.scss";
function PasswordTextFieldComponent(props: passwordFieldPropsModel) {
  const { label, fieldName, isRequired } = props;
  const [focus, setFocus] = useState(false);
  const [fullfilled, setFullfilled] = useState<passwordFullfilledModel>({
    doesNotContainFName: false,
    doesNotContainLName: false,
    minimumEightChar: false,
    oneLower: false,
    oneUpper: false,
  });
  const { watch } = useFormContext<UserInfo>();
  function ValidatePassword(value: string) {
    let currentFullfilled: passwordFullfilledModel = {
      doesNotContainFName: false,
      doesNotContainLName: false,
      minimumEightChar: false,
      oneLower: false,
      oneUpper: false,
    };
    currentFullfilled.oneUpper = value !== value.toLowerCase();
    currentFullfilled.oneLower = value !== value.toUpperCase();
    currentFullfilled.minimumEightChar = value.length >= 8;
    const fName = watch("firstName");
    const lName = watch("lastName");
    currentFullfilled.doesNotContainFName =
      fName !== "" ? !value.includes(fName) : true;
    currentFullfilled.doesNotContainLName =
      lName !== "" ? !value.includes(lName) : true;
    setFullfilled(currentFullfilled);
    if (
      !currentFullfilled.minimumEightChar ||
      !currentFullfilled.doesNotContainFName ||
      !currentFullfilled.doesNotContainLName ||
      !currentFullfilled.oneLower ||
      !currentFullfilled.oneUpper
    ) {
      return false;
    }
    return true;
  }
  return (
    <div className={style.passwordContainer}>
      <FormTextField
        label={label}
        fieldName={fieldName}
        isRequired={isRequired}
        isPassword
        // regex={FieldsRegex.password}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          ValidatePassword(event.target.value)
        }
        validationRules={{
          checkPasswordValidation: (value: string) => ValidatePassword(value),
        }}
      />
      {focus ? (
        <div className={style.popupInfo}>
          <h3>Password validation</h3>
          <hr></hr>
          <ul className={style.passwordUl}>
            <li
              className={!fullfilled.minimumEightChar ? style.notFulfilled : ""}
            >
              Should be a minimum of EIGHT characters
            </li>
            <li className={!fullfilled.oneUpper ? style.notFulfilled : ""}>
              Should contain at least one UPPERCASE letter
            </li>
            <li className={!fullfilled.oneLower ? style.notFulfilled : ""}>
              Should contain at least one LOWERCASE letter
            </li>
            <li
              className={
                !fullfilled.doesNotContainFName ? style.notFulfilled : ""
              }
            >
              Should not contain FIRST NAME
            </li>
            <li
              className={
                !fullfilled.doesNotContainLName ? style.notFulfilled : ""
              }
            >
              Should not contain LAST NAME
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

PasswordTextFieldComponent.defaultProps = {
  label: "Password",
  fieldName: "password",
  isRequired: false,
};
export default PasswordTextFieldComponent;
