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
  } = props;
  const type = isEmail ? "email" : isPassword ? "password" : "text";
  return (
    <TextField
      id={id}
      pattern={pattern}
      label={label}
      type={type}
      inputProps={inputProps}
      {...register(fieldName, {
        required: isRequired,
        maxLength: maxLength,
        validate: {
          checkEmailExist: async (value) => await checkEmailExist(value),
        },
      })}
    />
  );
}
FormTextFieldComponent.defaultProps = {
  isEmail: false,
  pattern: "(.*?)",
  isPassword: false,
  isRequired: false,
  maxLength: 50,
  inputProps: {},
  id: Math.random() * 1000 + "",
};
export default FormTextFieldComponent;
