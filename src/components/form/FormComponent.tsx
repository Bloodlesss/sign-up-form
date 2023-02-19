import { Password } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { signUpModel } from "../../models/signUpModel";
import FormTextField from "../formTextField";
import PasswordTextField from "../passwordTextField";
import style from "./FormComponent.module.scss";

function FormComponent() {
  const methods = useForm<signUpModel>({ mode: "onChange" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = methods;
  const onSubmit: SubmitHandler<signUpModel> = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <FormProvider {...methods}>
        <form className={style.formBody} onSubmit={handleSubmit(onSubmit)}>
          <FormTextField label={"First Name"} fieldName={"fName"} isRequired />
          <FormTextField label={"Last Name"} fieldName={"lName"} isRequired />
          <FormTextField
            label={"Email"}
            fieldName={"email"}
            isRequired
            isEmail
          />
          <PasswordTextField />

          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
export default FormComponent;
