import { ValidateResult } from "react-hook-form";

export const checkEmailExist = async (
  value: string
): Promise<ValidateResult> => {
  let result: ValidateResult = await new Promise((resolve) =>
    setTimeout(resolve, 4000)
  );
  const apiUrl = process.env.signUpApiUrl;
  console.log(apiUrl);
  return true;
};
export const checkEmailExist2 = async () => {
  return await new Promise((resolve) => setTimeout(resolve, 500));
};
