import React, { useState } from "react";
import FormComponent from "../../components/form/FormComponent";
import { SignedUpUser } from "../../models/signedUpUserModel";
import styles from "./SignUp.module.scss";
function SignUp() {
  const [isSignUp, setisSignUp] = useState(true);
  const [userData, setuserData] = useState({} as SignedUpUser);
  function fillData(response: SignedUpUser) {
    setuserData(response);
    setisSignUp(false);
  }
  if (isSignUp) {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <h2>Form Requirements</h2>
          <ul>
            <li>
              The form allows users to enter their first name, last name, email,
              and password.
            </li>
            <li>
              All fields (first name, last name, email, and password) are
              required and must be filled in before submission.
            </li>
            <li>
              Password validation rules have been implemented to ensure security
              of user's account:
              <ul>
                <li>
                  Password is required to be at least eight characters long.
                </li>
                <li>
                  Password is required to contain both lower and uppercase
                  letters.
                </li>
                <li>
                  Password is not allowed to contain the user's first or last
                  name.
                </li>
              </ul>
            </li>
            <li>
              The email validation process involves both synchronous and
              asynchronous validation methods:
              <ul>
                <li>
                  Synchronous validation is performed immediately upon
                  submission of the form, utilizing regex to verify that the
                  email is in the basic format of an email.
                </li>
                <li>
                  Asynchronous validation is performed via an API in real-time,
                  which validates whether the email exists or not.
                </li>
                <li>
                  A debounce feature has been implemented to provide users with
                  approximately 1 second to pause before triggering the
                  validation process.
                </li>
                <li>
                  Asynchronous validation is only initiated if the synchronous
                  validation has passed.
                </li>
                <li>
                  Please be advised that the usage of an open source API allows
                  for only 20 requests per day. If the request limit is
                  exceeded, the API will always return a false result.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.signUpContainer}>
          <h1>Sign Up Form</h1>
          <FormComponent onSubmit={fillData}></FormComponent>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Congratulations on signing up!</h1>
        <p>Here are your details:</p>
        <ul>
          <li>
            <label>ID: {userData._id}</label>
          </li>
          <li>
            <label>First Name: {userData.firstName}</label>
          </li>
          <li>
            <label>Last Name: {userData.lastName}</label>
          </li>
          <li>
            <label>Email: {userData.email}</label>
          </li>
        </ul>
      </div>
    );
  }
}
export default SignUp;
