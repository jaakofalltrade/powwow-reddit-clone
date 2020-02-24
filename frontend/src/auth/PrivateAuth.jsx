import React, { useEffect } from "react";
import apiService from "../api/Api";
import cookieController from "./CookieController";
import { Route, Redirect } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%"
      }}
    >
      <BounceLoader size={50} color={"#ff8000"} loading={true} />
    </div>
  );
};

// Checks if the access token is expired if expired
// it will get a new access token using the refresh token
// if the refresh token is expired the page will automatically logout.
const authenticateUser = async () => {
  let cookie_data = cookieController.getCookie("active_user").active;
  if (cookie_data || cookie_data === undefined) {
    await apiService
      .checkJWT()
      .then(async res => {
        if (await res) {
          cookieController.addCookie("active_user", { active: true });
        }
      })
      .catch(async err => {
        if (await err) {
          await apiService
            .refreshJWT()
            .then(async res => {
              if (await res) {
                cookieController.addCookie("active_user", { active: true });
                let new_cookie = cookieController.getCookie("powwow_cookie");
                new_cookie.access = res.data.access;
                cookieController.addCookie("powwow_cookie", new_cookie);
              }
            })
            .catch(async err => {
              if (await err) {
                cookieController.addCookie("active_user", { active: false });
                cookieController.deleteCookie("powwow_cookie");
              }
            });
        } else {
          cookieController.addCookie("active_user", { active: false });
          cookieController.deleteCookie("powwow_cookie");
        }
      });
  } else {
    console.log("Also, you are not logged in!");
  }
};

const Restriction = {
  Routing({ component: Component, restricted, ...rest }) {
    const [loading, setLoading] = React.useState(true);

    // Checks token if it is still valid
    useEffect(() => {
      const _asyncData = async () => {
        await authenticateUser();
        setLoading(false);
      };
      _asyncData();
    }, []);

    return !loading ? (
      <Route
        {...rest}
        render={props => {
          return cookieController.getCookie("active_user").active ? (
            restricted ? (
              <Component {...props} />
            ) : (
              <Redirect to="/dashboard" />
            )
          ) : restricted ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          );
        }}
      />
    ) : (
      <Loader />
    );
  }
};

export default Restriction;
