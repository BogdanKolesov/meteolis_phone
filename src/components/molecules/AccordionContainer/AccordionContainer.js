import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { StyledText } from '../../atoms';

const AccordionContainer = ({ title, content }) => {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => setActive(active === false ? true : false);


    return (
        <AccordionWrapper>
            <AccordionButton onPress={toggleAccordion}>
                <StyledText bold bigText centred>{title}</StyledText>
            </AccordionButton>
            <AccordionContent active={active}>
                {content}
            </AccordionContent>
        </AccordionWrapper>
    );
}

const AccordionWrapper = styled.View`
    width: 90%;
`

const AccordionButton = styled.TouchableOpacity`
    width: 100%;
    min-height: 30px;
    border: 1px solid black;
    border-radius: 5px;
`

const AccordionContent = styled.View`
    display: ${({ active }) => active ? 'none' : 'flex'};
`


export default AccordionContainer;
