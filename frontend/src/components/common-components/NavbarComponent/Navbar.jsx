import React from "react";
import {
  NavbarBody,
  HeaderTitle,
  LogoPowwow,
  Container,
  ButtonIcon
} from "./StyledComponents/SyledNavbar.jsx";
import MenuBar from "../MenuComponents/MenuBar.jsx";
import MenuIcon from "@material-ui/icons/Menu";
import cookieController from "../../../auth/CookieController";
import { Redirect } from "react-router-dom";

const Navbar = {
  Public() {
    return (
      <NavbarBody>
        <Container justify="flex-start">
          <LogoPowwow />
          <HeaderTitle>Powwow</HeaderTitle>
        </Container>
        {/* <Container justify="space-between">
                    <ButtonIcon
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <MenuIcon />
                    </ButtonIcon>
                    <MenuBar 
                        name="PrivateMenu"
                        open={open}
                        handleClose={handleClose}
                        anchorRef={anchorRef}
                        handleListKeyDown={handleListKeyDown}
                        dataItem={menuData}
                    />
                </Container> */}
      </NavbarBody>
    );
  },

  Private() {
    const [loggedIn, setLoggedIn] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
      setOpen(!open);
    };

    const handleClose = event => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    const handleListKeyDown = event => {
      if (event.key === "Tab") {
        event.preventDefault();
        setOpen(false);
      }
    };

    // Move this piece of code outside
    // This is only temporary just like happiness
    const temporaryLogout = () => {
      cookieController.deleteCookie("powwow_cookie");
      cookieController.deleteCookie("active_user");
      cookieController.deleteCookie("user_details");
      setOpen(false);
      setLoggedIn(false);
    };

    // If you want to add more menus
    const menuData = [
      {
        name: "Profile",
        handleFunction: handleClose
      },
      {
        name: "Communities",
        handleFunction: handleClose
      },
      {
        name: "Logout",
        handleFunction: temporaryLogout
      }
    ];

    return loggedIn ? (
      <NavbarBody colored>
        <Container justify="flex-start">
          <LogoPowwow />
          <HeaderTitle>Powwow</HeaderTitle>
        </Container>
        <Container justify="space-between">
          <ButtonIcon
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MenuIcon />
          </ButtonIcon>
          <MenuBar
            name="PrivateMenu"
            open={open}
            handleClose={handleClose}
            anchorRef={anchorRef}
            handleListKeyDown={handleListKeyDown}
            dataItem={menuData}
          />
        </Container>
      </NavbarBody>
    ) : (
        <Redirect to="/" />
      );
  }
};

export default Navbar;
