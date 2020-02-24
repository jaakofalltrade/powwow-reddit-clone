import styled from "styled-components";
import { device } from "../../Responsiveness/DeviceBreakpoints";
import Logo from "../../../../assets/images/logo.png";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const NavbarBody = styled.nav`

  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 900;
  /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);*/
  background-color: ${props =>
    props.colored &&
    '#242729'};
  position: fixed;
  top: 0;
  transition: height 0.5s;

  @media ${device.tablet} {
    height: 50px;
  }
`;

const HeaderTitle = styled.h1`
  color: #ff8000;
  cursor: pointer;
  transition: 0.5s;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

const LogoPowwow = styled.div`
  cursor: pointer;
  float: left;
  position: relative;
  width: 50px;
  height: 50px;
  background-image: url(${Logo});
  background-size: contain;
  transition: 0.5s;

  @media ${device.tablet} {
    width: 45px;
    height: 45px;
  }
`;

const Container = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: ${props => props.justify};
  margin-left: 10%;
  margin-right: 10%;
  align-items: center;

  @media ${device.tablet} {
    margin-left: 5%;
    margin-right: 5%;
    width: auto;
  }

  @media ${device.laptop} {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const ButtonNav = styled(Button)`
  margin-left: 5px;
  margin-right: 5px;
  height: 35px !important;
  background-color: ${props => props.primary && "#1976d2"} !important;
  color: ${props => props.primary && "white"} !important;

  @media ${device.tablet} {
    display: none !important;
  }
`;

const ButtonIcon = styled(IconButton)`
  color: #fafafb !important;
  display: ${props => (props.display ? "none" : "block")} !important;
  float: right !important;

  @media ${device.tablet} {
    display: block !important;
  }
`;

export {
  NavbarBody as default,
  HeaderTitle,
  NavbarBody,
  LogoPowwow,
  Container,
  ButtonNav,
  ButtonIcon
};
