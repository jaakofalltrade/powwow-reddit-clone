import styled from "styled-components";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { device } from "../../common-components/Responsiveness/DeviceBreakpoints";

const BodyMain = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #dae0e6;
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
  max-width: 1024px;
  margin: 0 auto;
  height: auto;
  min-height: 100px;
  padding-bottom: 20px;
  flex-grow: 1;
  margin-top: 65px;

  @media ${device.laptop} {
    width: 85%;
    margin-top: 60px;
  }

  @media ${device.tablet} {
    width: 95%;
    margin-top: 50px;
  }

  @media (max-width: 670px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: auto;
  padding: 5px 0 5px 0;
  min-height: 40px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;

  @media ${device.tablet} {
    margin-bottom: 5px;
  }
`;

const BodyContainer = styled.div`
  margin-top: 10px;
  height: auto;
  width: 65%;
  min-height: 250px;
  margin-bottom: 5px;

  @media ${device.tablet} {
    width: 400px;
  }

  @media (max-width: 670px) {
    width: 100%;
    margin-top: 0px;
  }
`;

const BodyAltCont = styled.div`
  width: 300px;
  background-color: #fff;
  height: 250px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 670px) {
    width: 100%;
    margin-left: 0;
  }
`;

const BodyCommunity = styled.div`
  width: 100%;
  height: auto;
  min-height: 150px;
  margin-bottom: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const CommunityBody = styled.div`
  display: flex;
  width: 95%;
  height: auto;
  min-height: 150px;
  margin: 0 auto;
  flex-direction: column;
`;

const BodyHolder = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
`;

const CommunityContent = styled.div`
  color: #242729;
  display: flex;
  align-items: ${props => props.alignItems};
  position: relative;
  height: auto;
  min-height: ${props => props.height};
  margin-bottom: 1px;
`;

const BodyTitle = styled.h1`
  color: #242729;
  font-size: 25px;
`;

const LoadMoreBtn = styled(Button)`
  width: 80%;
  margin: 0 auto !important;
  font-size: 20px !important;
  background-color: ${props => props.disabled ? '#8cc2f7' : '#1976d2'} !important;
  color: #fff !important;
  margin-top: 10px !important;
`;

const SearchInput = styled(TextField)`
  width: 95% !important;
`;

export {
  BodyMain as default,
  BodyMain,
  BodyContainer,
  BodyContent,
  BodyAltCont,
  SearchBar,
  BodyTitle,
  BodyHolder,
  BodyCommunity,
  CommunityBody,
  CommunityContent,
  LoadMoreBtn,
  SearchInput,
};
