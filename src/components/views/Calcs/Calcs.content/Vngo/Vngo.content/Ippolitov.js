import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Ippolitov = () => {
    const [r, setR] = useState('');

    let vngo
    let result
    const calcIppolitov = () => {
        let p

        vngo = 24 * (100 - Number(r))
        return `Высота нижней границы облаков = ${vngo}`
    }
    let res = calcIppolitov()

    const accordionContent = (
        <>
            <StyledText bold>
                Формула Ипполитова
            </StyledText>
            <StyledText>
                Для определения высоты нижней границы облачности заметную
                популярность получили формулы, выведенные с помощью экспериментов:
                формула Ипполитова: ВНГО = 24 ∗ (100 − R )
            </StyledText>
            <StyledText>
                R – относительная влажность, (%);
            </StyledText>
        </>
    )

    return (
        <ScrollContainer>
            <AccordionContainer title='Теоретическая часть' content={accordionContent} />
            <Row>
                <StyledText >
                    Относительная влажность у земли:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setR}
                    value={r}
                />
            </Row>
            <StyledText fontStyle='black' size='big' bold>{res}</StyledText>
        </ScrollContainer>
    );
}


export default Ippolitov;
