export interface emailFieldPropsModel {
  label: string;
  fieldName: string;
  isRequired: boolean;
  regex: RegExp;
  onFocus: () => void;
  onBlur: () => void;
  validationRules: Record<string, any>;
}
