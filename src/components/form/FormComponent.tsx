import { Button, TextField } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { signUpModel } from "../../models/signUpModel";
import FormTextField from "../formTextField";
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
          <TextField
            id="outlined-basic"
            {...register("fName", { maxLength: 50 })}
            label="First Name"
            placeholder="First Name"
            variant="outlined"
            onChange={async () => {
              await trigger("email");
            }}
          />

          <FormTextField label={"Last Name"} fieldName={"lName"} isRequired />
          <FormTextField label={"Last Name"} fieldName={"lName"} isRequired />
          <FormTextField
            label={"Password"}
            fieldName={"password"}
            isRequired
            isPassword
          />
          <FormTextField
            label={"email"}
            fieldName={"email"}
            isRequired
            isEmail
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
