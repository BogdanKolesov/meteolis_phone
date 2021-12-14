import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Ki = () => {
    const [t, setT] = useState('');
    const [td, setTd] = useState('');

    let vngo
    let result
    const calcFerrel = () => {
        let p

        vngo = 122 * (Number(t - td))
        return `Высота нижней границы облаков = ${vngo}`
    }
    let res = calcFerrel()

    const accordionContent = (
        <>
            <StyledText bold>
                Формула Ферреля
            </StyledText>
            <StyledText>
                Для определения высоты нижней границы облачности заметную
                популярность получили формулы, выведенные с помощью экспериментов:
                формула Ферреля: = 122 ∗ ( −Td)0
            </StyledText>
            <StyledText>
                H– высота нижней границы облаков, (м);
                T – температура воздуха у земной поверхности (°С);
                Td – температура точки росы у земной поверхности, (°С);
            </StyledText>
        </>
    )

    return (
        <ScrollContainer>
            <AccordionContainer title='Теоретическая часть' content={accordionContent} />
            <Row>
                <StyledText >
                    Температура воздуха у земли:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT}
                    value={t}
                />
            </Row>
            <Row>
                <StyledText >
                    Температура точки росы у земли:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd}
                    value={td}
                />
            </Row>

            <StyledText fontStyle='black' size='big' bold>{res}</StyledText>
        </ScrollContainer>
    );
}


export default Ki;
