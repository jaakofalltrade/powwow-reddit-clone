import React from "react";
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
import { Redirect } from "react-router-dom";

const SignUp = ({
  onChangeBox,
  register,
  handleSubmit,
  errors,
  watch,
  setError,
  loadingButton,
  disableAll,
  loggedIn,
  setLoggedIn,
  openSnackbar
}) => {
  // Handles the submition and checking part of the sign up form.
  const onSubmit = async data => {
    disableAll(true);
    apiService
      .signUp({
        username: data.reg_username,
        email: data.email,
        password: data.password
      })
      .then(async response => {
        if (await response) {
          apiService
            .login({
              username: data.reg_username,
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
            });
        } else {
          openSnackbar(true, "Oops something happened!", "warning", 2000);
        }
      })
      .catch(async error => {
        if (await error.response) {
          if (await error.response.data.username) {
            setError("reg_username", "exist", "Username already taken.");
            openSnackbar(true, "Username already taken.", "error", 2000);
          }
          if (await error.response.data.email) {
            setError("email", "exist", "Email already taken.");
            openSnackbar(true, "Email already taken.", "error", 2000);
          }
          if (
            (await error.response.data.email) &&
            (await error.response.data.username)
          ) {
            openSnackbar(
              true,
              "Username and Email already taken.",
              "error",
              2000
            );
          }
        } else {
          openSnackbar(true, "Oops something happened!", "warning", 2000);
        }
        disableAll(false);
      });
  };

  return !loggedIn ? (
    <LandingBox onSubmit={handleSubmit(onSubmit)} heightSize={510}>
      <BoxTitle>Sign Up</BoxTitle>
      <InputBox>
        <InputStyle
          disabled={loadingButton}
          error={!!errors.reg_username}
          name="reg_username"
          label="Username"
          placeholder="Username"
          variant="outlined"
          helperText={<ErrorMessage errors={errors} name="reg_username" />}
          inputRef={register({
            required: "Username is a required field."
          })}
        />
      </InputBox>
      <InputBox>
        <InputStyle
          disabled={loadingButton}
          error={!!errors.email}
          name="email"
          label="Email"
          placeholder="Email"
          variant="outlined"
          helperText={<ErrorMessage errors={errors} name="email" />}
          inputRef={register({
            required: "Email is a required field.",
            pattern: {
              value: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Must be a valid email dum dum."
            }
          })}
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
          inputRef={register({
            required: "Password is a required field.",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters."
            }
          })}
        />
      </InputBox>
      <InputBox>
        <InputStyle
          disabled={loadingButton}
          error={!!errors.cpassword}
          type="password"
          name="cpassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          variant="outlined"
          helperText={<ErrorMessage errors={errors} name="cpassword" />}
          inputRef={register({
            required: "Confirm Password is a required field.",
            validate: value => {
              return value === watch("password") || "Passwords must match.";
            }
          })}
        />
      </InputBox>
      <SignButton disabled={loadingButton} name="ButtonSubmit" type="submit">
        Sign Up
      </SignButton>
      <InputBox>
        <SwitchSign>
          Already a Powwow member?&nbsp;
          <SwitchLink href="#" onClick={onChangeBox}>
            Sign In
          </SwitchLink>
        </SwitchSign>
      </InputBox>
    </LandingBox>
  ) : (
      <Redirect to="/dashboard" />
    );
};

export default SignUp;
