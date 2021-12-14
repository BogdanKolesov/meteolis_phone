import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const VngoFormula = () => {
    const [t, setT] = useState('');
    const [td, setTd] = useState('');
    const [m, setM] = useState('');


    let vngo
    let result
    const calcVngoFormula = () => {
        let p

        vngo = 122 * (Number(t) - Number(td)) - Number(m)
        return `Высота нижней границы облаков = ${vngo}`
    }
    let res = calcVngoFormula()

    const accordionContent = (
        <>
            <StyledText bold>
                Формула без автора
            </StyledText>
            <StyledText>
                Для определения высоты нижней границы облачности заметную
                популярность получили формулы, выведенные с помощью экспериментов:
                формула без автора: = 122 ∗ ( T − Td)-m,
            </StyledText>
            <StyledText>
                T – температура воздуха у земной поверхности (°С);
                Td – температура точки росы у земной поверхности, (°С);
                m – коэффициент, связанный с наличием осадков.
                При мороси m = 80, при других видах осадков m = 50 и при не
                появлении осадков. При m = 0 формула преобразуется в формулу Ферреля).
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
            <Row>
                <StyledText >
                    Коэффициент m:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setM}
                    value={m}
                />
            </Row>
            <StyledText fontStyle='black' size='big' bold>{res}</StyledText>
        </ScrollContainer>
    );
}


export default VngoFormula;
