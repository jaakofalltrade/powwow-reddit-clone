import styled from 'styled-components';


const FooterBody = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 20px 0 10px 0;
    height: 60px;
    background-color: ${props => props.colored && '#242729'};
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

const SubTitle = styled.p`
    font-size: 12px;
    color: #bbc0c4;
    letter-spacing: 2px;
`;

export {
    FooterBody as default,
    FooterBody,
    FooterContent,
    SubTitle,
};