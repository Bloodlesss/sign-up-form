import { InputBaseComponentProps } from "@mui/material";
import PropTypes from "prop-types";
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
  onFocus: () => void;
  onBlur: () => void;
  validationRules: Record<string, any>;
}
