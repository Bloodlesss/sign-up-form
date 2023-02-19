import { InputBaseComponentProps } from "@mui/material";

export interface formFieldPropsModel {
  fieldName: string;
  pattern: RegExp;
  isRequired: boolean;
  isEmail: boolean;
  isPassword: boolean;
  label: string;
  id: string;
  maxLength: number;
  inputProps: InputBaseComponentProps;
}
