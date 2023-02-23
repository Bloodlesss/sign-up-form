import React, { FormEvent, useCallback, useEffect, useState } from "react";
import FormTextFieldComponent from "../../formTextField";
import { emailFieldPropsModel } from "../../../models/emailFieldPropsModel";
import { FieldError, useFormContext } from "react-hook-form";
import style from "./emailTextFieldComponent.module.scss";
import { CircularProgress } from "@mui/material";
import _debounce from "lodash/debounce";
import { checkEmailExist } from "../../../services/auth.service";
import { ChangeEvent } from "react";
function EmailTextFieldComponent(props: emailFieldPropsModel) {
  const { onFocus, regex, label, fieldName, isRequired, onBlur } = props;
  const {
    setError,
    formState: { errors },
  } = useFormContext();
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);
  const [loading, setLoading] = useState(false);
  async function handleDebounceFn(inputValue: string, error?: FieldError) {
    setLoading(true);
    const response = await checkEmailExist(inputValue);
    if (!response)
      setError(fieldName, {
        type: "CheckEmailExist",
        message: "This Email Does Not Exist Please Enter a Valid Email",
      });
    setLoading(false);
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (regex.test(event.target.value)) debounceFn(event.target.value);
  }

  return (
    <div className={style.container}>
      <FormTextFieldComponent
        isRequired={isRequired}
        regex={regex}
        fieldName={fieldName}
        label={label}
        handleChange={handleChange}
        onFocus={(): void => {
          onFocus();
        }}
        onBlur={(): void => {
          onBlur();
        }}
      ></FormTextFieldComponent>
      {loading && <CircularProgress />}
    </div>
  );
}
EmailTextFieldComponent.defaultProps = {
  onFocus: () => {},
  fieldName: "email",
  isRequired: false,
  label: "Email",
  onBlur: () => {},
  validationRules: {},
  regex: "(.*?)",
};
export default EmailTextFieldComponent;
