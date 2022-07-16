import React from 'react';
import { TextInput } from 'react-native';

const CalcInput = ({ onChangeText, value }) => {
    return (
        <Input
            keyboardType='numeric'
            onChangeText={onChangeText}
            value={value}>

        </Input>
    );
}

const Input = styled.TextInput`
    font-size: 16px;
    padding: 5px;
    width: 40%;
    border-color: #000;
    border-width: 1px;
`

export default CalcInput;
