import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { FieldsRegex } from "../../constants/fields-regex";
import { UserInfo } from "../../models/userInfoModel";
import { SignedUpUser } from "../../models/signedUpUserModel";
import { checkEmailExist, submitUser } from "../../services/auth.service";
import FormTextField from "../formTextField/formTextFieldComponent";
import { EmailTextField, PasswordTextField } from "../signUpFormFields";
import style from "./FormComponent.module.scss";

interface ChildProps {
  onSubmit: (data: SignedUpUser) => void;
}
function FormComponent(props: ChildProps) {
  const methods = useForm<UserInfo>({ mode: "onChange" });
  const [isloading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = methods;
  const onSubmit: SubmitHandler<UserInfo> = async (data) => {
    console.log(data);
    setIsLoading(true);
    props.onSubmit(await submitUser(data));
  };
  console.log(errors);

  return (
    <div className={style.formContainer}>
      <FormProvider {...methods}>
        <form className={style.formBody} onSubmit={handleSubmit(onSubmit)}>
          <FormTextField
            regex={FieldsRegex.Names}
            label={"First Name"}
            fieldName={"firstName"}
            isRequired
            onBlur={async () => {
              await trigger("password");
            }}
          />
          <FormTextField
            regex={FieldsRegex.Names}
            label={"Last Name"}
            fieldName={"lastName"}
            isRequired
            onBlur={async () => {
              await trigger("password");
            }}
          />
          <EmailTextField
            regex={FieldsRegex.email}
            label={"Email"}
            fieldName={"email"}
            isRequired
            validationRules={{
              checkEmailExist: async (value: string) =>
                await checkEmailExist(value),
            }}
          />
          <PasswordTextField
            label={"Password"}
            fieldName={"password"}
            isRequired={true}
          />

          <Button
            disabled={!isValid || errors.email != null || isloading}
            variant="outlined"
            type="submit"
          >
            {isloading ? <CircularProgress /> : "Submit"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
export default FormComponent;
