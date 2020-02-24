import React from 'react';
import {
    FooterBody,
    FooterContent,
    SubTitle,
} from './StyledComponents/StyledFooter.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons'


const Footer = (props) => {
    return (
        <FooterBody {...props}>
            <FooterContent>
                <FontAwesomeIcon icon={faPiedPiper} color="#49944b" size="2x" />
                <SubTitle>Powered by PiedPiper</SubTitle>
            </FooterContent>
        </FooterBody>
    )
}

export default Footer;