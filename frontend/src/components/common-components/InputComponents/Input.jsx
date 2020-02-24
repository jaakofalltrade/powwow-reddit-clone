import React from 'react';
import {
    InputStyle,
    InputBox,
} from './StyledComponents/StyledInput.jsx';


const InputComponent = props => {
    return (
        <InputBox>
            <InputStyle
                {...props}
            />
        </InputBox>
    )
}

export default InputComponent;