import { ErrorMessage } from "@hookform/error-message";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { formFieldPropsModel } from "../../models/formFieldPropsModel";
import { checkEmailExist } from "../../services/auth.service";
import style from "./formTextFieldComponent.module.scss";
function FormTextFieldComponent(props: formFieldPropsModel) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const {
    fieldName,
    regex,
    isRequired,
    isEmail,
    isPassword,
    label,
    id,
    maxLength,
    inputProps,
    onFocus,
    onBlur,
    handleChange,
    validationRules,
  } = props;
  const type = isEmail ? "email" : isPassword ? "password" : "text";
  const currentError = errors[fieldName];
  return (
    <>
      <TextField
        style={{ color: "white" }}
        id={id}
        helperText={
          currentError ? (
            <span style={{ color: "red" }}>
              {currentError?.message as String}
            </span>
          ) : null
        }
        error={currentError != null}
        label={label}
        type={type}
        onFocus={onFocus}
        {...register(fieldName, {
          pattern: { value: regex, message: "Please Enter a valid Value" },
          required: isRequired ? "this field is required" : false,
          maxLength: {
            value: maxLength,
            message: "You can not go above " + maxLength,
          },
          onChange: handleChange,
          onBlur: onBlur,
          validate: validationRules,
        })}
      />
    </>
  );
}
FormTextFieldComponent.defaultProps = {
  isEmail: false,
  validationRules: {},
  onFocus: () => {},
  onBlur: () => {},
  handleChange: () => {},
  regex: "(.*?)",
  isPassword: false,
  isRequired: false,
  maxLength: 50,
  inputProps: {},
  id: Math.random() * 1000 + "",
};
export default FormTextFieldComponent;
