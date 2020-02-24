import React from "react";
import Navbar from "../common-components/NavbarComponent/Navbar.jsx";
import Footer from "../common-components/FooterComponent/Footer.jsx";
import Sign from "../common-components/SignComponent/Sign.jsx";
import {
  BodyMain,
  BodyBox,
  BodyContainer
} from "./StyledComponents/StyledBody.jsx";
import BodyCont from "./BodyTitle.jsx";

const Home = () => {
  return (
    <BodyMain>
      <Navbar.Public />
      <BodyBox>
        <BodyContainer flexNumber={3} hideLater="true">
          <BodyCont />
        </BodyContainer>
        <BodyContainer flexNumber={2}>
          <Sign />
        </BodyContainer>
      </BodyBox>
      <Footer />
    </BodyMain>
  );
};

export default Home;
