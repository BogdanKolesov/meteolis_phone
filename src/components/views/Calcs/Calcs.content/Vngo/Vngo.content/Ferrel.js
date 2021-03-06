import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import Chartexample from '../../../../../atoms/ChartExample';
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Ferrel = () => {
    const [t, setT] = useState('');
    const [td, setTd] = useState('');

    let vngo
    let result
    const calcFerrel = () => {
        let p

        vngo = 122 * (Number(t) - Number(td))
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
                формула Ферреля: ВНГО = 122 ∗ ( T − Td)
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


export default Ferrel;
