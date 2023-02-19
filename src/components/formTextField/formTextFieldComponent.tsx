import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { formFieldPropsModel } from "../../models/formFieldPropsModel";
import { checkEmailExist } from "../../services/auth.service";

function FormTextFieldComponent(props: formFieldPropsModel) {
  const { register } = useFormContext();
  const {
    fieldName,
    pattern,
    isRequired,
    isEmail,
    isPassword,
    label,
    id,
    maxLength,
    inputProps,
    onFocus,
    onBlur,
    validationRules,
  } = props;
  const type = isEmail ? "email" : isPassword ? "password" : "text";
  return (
    <TextField
      id={id}
      pattern={pattern}
      label={label}
      type={type}
      inputProps={inputProps}
      onFocus={onFocus}
      {...register(fieldName, {
        required: isRequired,
        maxLength: maxLength,
        onBlur: onBlur,
        validate: validationRules,
      })}
    />
  );
}
FormTextFieldComponent.defaultProps = {
  isEmail: false,
  validationRules: {},
  onFocus: () => {},
  onBlur: () => {},
  pattern: "(.*?)",
  isPassword: false,
  isRequired: false,
  maxLength: 50,
  inputProps: {},
  id: Math.random() * 1000 + "",
};
export default FormTextFieldComponent;
