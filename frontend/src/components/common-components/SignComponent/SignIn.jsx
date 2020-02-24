import React from "react";
import { Redirect } from "react-router-dom";
import { ErrorMessage } from "react-hook-form";
import {
  LandingBox,
  BoxTitle,
  SignButton,
  SwitchSign,
  SwitchLink
} from "./StyledComponents/StyledSign.jsx";
import {
  InputStyle,
  InputBox
} from "../InputComponents/StyledComponents/StyledInput.jsx";
import apiService from "../../../api/Api";
import cookieController from "../../../auth/CookieController";

const SignIn = ({
  onChangeBox,
  register,
  handleSubmit,
  errors,
  loadingButton,
  disableAll,
  setError,
  loggedIn,
  setLoggedIn,
  openSnackbar
}) => {
  const onSubmit = async data => {
    disableAll(true);
    apiService
      .login({
        username: data.username,
        password: data.password
      })
      .then(async res => {
        if (await res) {
          cookieController.addCookie("user_details", res.data.user)
          apiService.getJWT({
            username: data.username,
            password: data.password
          })
            .then(result => {
              cookieController.addCookie("powwow_cookie", result.data);
              cookieController.addCookie("active_user", { active: true });
              setLoggedIn(true);
            })
        } else {
          openSnackbar(true, "Oops something happened!", "warning", 2000);
        }
      })
      .catch(async error => {
        if (await error.response) {
          console.log(error.response)
          if (await error.response.data) {
            setError("username", "exist", "");
            setError("password", "exist", "");
            openSnackbar(true, error.response.data.non_field_errors, "error", 2000);
          }
        } else {
          openSnackbar(true, "Oops something happened!", "warning", 2000);
        }
        disableAll(false);
      });
  };

  return !loggedIn ? (
    <LandingBox onSubmit={handleSubmit(onSubmit)} heightSize={340}>
      <BoxTitle>Sign In</BoxTitle>
      <InputBox>
        <InputStyle
          disabled={loadingButton}
          error={!!errors.username}
          name="username"
          label="Username"
          placeholder="Username"
          variant="outlined"
          helperText={<ErrorMessage errors={errors} name="username" />}
          inputRef={register({ required: "Username is a required field." })}
        />
      </InputBox>
      <InputBox>
        <InputStyle
          disabled={loadingButton}
          error={!!errors.password}
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          variant="outlined"
          helperText={<ErrorMessage errors={errors} name="password" />}
          inputRef={register({ required: "Password is a required field." })}
        />
      </InputBox>
      <SignButton disabled={loadingButton} name="ButtonSubmit" type="submit">
        Sign In
      </SignButton>
      <InputBox>
        <SwitchSign>
          New to Powwow?&nbsp;
          <SwitchLink href="#" onClick={onChangeBox}>
            Sign Up
          </SwitchLink>
        </SwitchSign>
      </InputBox>
    </LandingBox>
  ) : (
      <Redirect to="/dashboard" />
    );
};

export default SignIn;
