import React from 'react';
import SearchBox from './SearchBox.jsx';
import ContentBox from './ContentBox.jsx';
import {
    BodyContainer,
    BodyContent,
    BodyAltCont,
    BodyHolder,
} from "../StyledComponents/StyledDashboard.jsx";

const BodyComponent = () => {
    return (
        <BodyContent>
            <BodyContainer>
                <SearchBox />
                <BodyHolder>
                    <ContentBox />
                </BodyHolder>
            </BodyContainer>
            <BodyAltCont />
        </BodyContent>
    )
}

export default BodyComponent;