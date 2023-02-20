import { Password } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { FieldsRegex } from "../../enums/fields-regex";
import { UserInfo } from "../../models/userInfoModel";
import { checkEmailExist, submitUser } from "../../services/auth.service";
import FormTextField from "../formTextField";
import { EmailTextField, PasswordTextField } from "../signUpFormFields";
import style from "./FormComponent.module.scss";

function FormComponent() {
  const methods = useForm<UserInfo>({ mode: "onChange" });
  const {
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = methods;
  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    console.log(data);
    submitUser(data);
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
            disabled={!isValid || errors.email != null}
            variant="outlined"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
export default FormComponent;
