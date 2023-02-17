import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { signUpModel } from "../../models/signUpModel";


function FormComponent() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<signUpModel>();
  const onSubmit: SubmitHandler<signUpModel> = data => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <input type="text" {...register("fName", { required: true, maxLength: 50 })} />
        <input type="text" {...register("lName", { required: true, maxLength: 50 })} />
        <input type="text" {...register("uName", { required: true, maxLength: 50 })} />
        <input type="text" {...register("email", { required: true, maxLength: 50 })} />
        <input type="text" {...register("password", { required: true, maxLength: 50 })} />
      </form>
    </>

  )
}
export default FormComponent;
