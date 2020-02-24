import React from "react";
import Navbar from "../common-components/NavbarComponent/Navbar.jsx";
import Footer from "../common-components/FooterComponent/Footer.jsx";
import BodyMain from "./StyledComponents/StyledDashboard.jsx";
import BodyComponent from "./Components/BodyComponent.jsx";


const Dashboard = () => {

  return (
    <React.Fragment>
      <BodyMain>
        <Navbar.Private />
        <BodyComponent />
        <Footer colored />
      </BodyMain>
    </React.Fragment>
  );
};

export default Dashboard;
