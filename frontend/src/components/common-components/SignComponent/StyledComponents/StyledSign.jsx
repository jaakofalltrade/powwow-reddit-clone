import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { device } from '../../Responsiveness/DeviceBreakpoints';


export const LandingBox = styled.form`
    margin-top: 90px;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    height: ${props => props.heightSize}px;
    width: 350px;
    background-color: #fff;
    flex-direction: column;
    padding-bottom: 30px;

    @media ${device.tablet} {
        width: 95%;
        margin: 0 auto;
        height: auto;
        padding-bottom: 20px;
        min-height: 200px;
        margin-top: 65px;
        margin-bottom: 10px;
    }
`;

export const BoxTitle = styled.h1`
    font-size: 30px;
    color: #ff8000;
    margin-bottom: 30px;
`;

export const SignButton = styled(Button)`
    width: 95%;
    background-color: ${props =>
        props.disabled ? "#acd2f7" : "#1976d2"
    } !important;
    color: white !important;
    height: 50px; 
    font-size: 17px !important;
    margin-top: 5px !important;
`;

export const SwitchSign = styled.p`
    font-size: 15px;
    color: rgba(0,0,0,0.87);
`;

export const SwitchLink = styled.a`
    text-decoration: none;
    font-size: 15px;
    color: #1976d2;
`;

export default LandingBox;