import styled from "styled-components";
import { device } from "../../common-components/Responsiveness/DeviceBreakpoints";

const BodyMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;
  min-height: 100vh;
  flex-direction: column;
  background-color: #242729;
  background-image: url("https://4.bp.blogspot.com/-zO8hwvt7iMk/XAVxt4aoQvI/AAAAAAAAwa4/D5m3ApKkAAABZteHWWv_5uzTn8X7JaDxgCPcBGAYYCw/s1600/7T9364v.gif");
  /* background-image: url("https://i.ytimg.com/vi/-MKapbz0GIo/maxresdefault.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: ${props => props.flexNumber};
  background-color: ${props => props.flexColor};

  @media ${device.tablet} {
    display: ${props => (props.hideLater ? `none` : `block`)};
    width: 100%;
  }
`;

const BodyTitleBox = styled.div`
  height: auto;
  flex: 1;
`;

const BodyTitle = styled.h2`
  margin-top: 25%;
  margin-left: 4%;
  font-size: 40px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  color: #ff8000;
`;

const BodyCaption = styled.p`
  font-size: 18px;
  /* color: #1976d2; */
  color: #f4f5f7;
  margin-left: 4%;
  width: 70%;
`;

const BodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1024px;
  height: auto;
  min-height: 200px;
  position: relative;
  flex: 1 0 auto;

  @media ${device.laptop} {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

export {
  BodyMain as default,
  BodyMain,
  BodyBox,
  BodyContainer,
  BodyTitleBox,
  BodyTitle,
  BodyCaption
};
