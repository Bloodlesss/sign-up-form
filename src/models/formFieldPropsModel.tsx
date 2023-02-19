import { InputBaseComponentProps } from "@mui/material";
import { ChangeEvent } from "react";
export interface formFieldPropsModel {
  fieldName: string;
  regex: RegExp;
  isRequired: boolean;
  isEmail: boolean;
  isPassword: boolean;
  label: string;
  id: string;
  maxLength: number;
  inputProps: InputBaseComponentProps;
  onFocus: () => void;
  onBlur: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validationRules: Record<string, any>;
}
