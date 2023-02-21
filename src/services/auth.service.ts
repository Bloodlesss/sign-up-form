import axios from "axios";
import { ValidateResult } from "react-hook-form";
import { EmailVerification } from "../models/emailVerificationModel";
import { SignedUpUser } from "../models/signedUpUserModel";
import { UserInfo } from "../models/userInfoModel";

export const checkEmailExist = async (
  value: string
): Promise<ValidateResult> => {
  const apiUrl = process.env.REACT_APP_emailVerificationUrl as string;
  const verificationKey = process.env.REACT_APP_emailVerificationKey as string;
  const headers = {
    apikey: verificationKey,
  };
  const params = {
    email: value,
  };
  const response = await axios.get<EmailVerification>(apiUrl + "", {
    headers: headers,
    params: params,
  });
  return response.data.smtp_check && response.data.mx_found;
};
export const submitUser = async (user: UserInfo): Promise<SignedUpUser> => {
  const apiUrl = process.env.REACT_APP_SignUpApiUrl;
  const url = apiUrl as string;
  const response: SignedUpUser = await axios.post(url + "", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  return response;
};
