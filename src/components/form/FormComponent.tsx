import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { signUpModel } from "../../models/signUpModel";
import style from "./FormComponent.module.scss"

function FormComponent() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<signUpModel>();
  const onSubmit: SubmitHandler<signUpModel> = data => console.log(data);
  return (
    <>
      <form className={style.formBody} onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic" {...register("fName", { required: true, maxLength: 50 })} label="First Name" placeholder="First Name" variant="outlined" />
        <TextField id="outlined-password-input" label="Password" type="password" />
        <TextField id="outlined-basic" {...register("lName", { required: true, maxLength: 50 })} label="Last Name" placeholder="Last Name" variant="outlined" />
        <TextField id="outlined-basic" {...register("uName", { required: true, maxLength: 50 })} label="User Name" placeholder="User Name" variant="outlined" />
        <TextField id="outlined-basic" {...register("email", { required: true, maxLength: 50 })} label="Outlined" variant="outlined" />
        {/* <input type="text"  />
        <input type="text"  />
        <input type="text"  />
        <input type="text"  />
        <input type="text" {...register("password", { required: true, maxLength: 50 })} /> */}
      </form>
    </>

  )
}
export default FormComponent;
