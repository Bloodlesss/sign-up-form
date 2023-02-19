import { Password } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { FieldsRegex } from "../../enums/fields-regex";
import { signUpModel } from "../../models/signUpModel";
import { checkEmailExist } from "../../services/auth.service";
import FormTextField from "../formTextField";
import { EmailTextField, PasswordTextField } from "../signUpFormFields";
import style from "./FormComponent.module.scss";

function FormComponent() {
  const methods = useForm<signUpModel>({ mode: "onChange" });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<signUpModel> = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <FormProvider {...methods}>
        <form className={style.formBody} onSubmit={handleSubmit(onSubmit)}>
          <FormTextField
            regex={FieldsRegex.Names}
            label={"First Name"}
            fieldName={"fName"}
            isRequired
          />
          <FormTextField
            regex={FieldsRegex.Names}
            label={"Last Name"}
            fieldName={"lName"}
            isRequired
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

          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
export default FormComponent;
