import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Waiting = () => {
    const [t850, setT850] = useState('');
    const [td850, setTd850] = useState('');
    const [t700, setT700] = useState('');
    const [td700, setTd700] = useState('');
    const [t500, setT500] = useState('');

    let k
    let result
    const calcWaiting = () => {

        k = (2 * (t850 - td850) - (t700 - td700) - t500)
        k > 25 ? result = 'Грозы'
            : k > 20 ? result = 'Местами грозы'
                : result = 'Без гроз'
        return `k = ${k}, ${result}`
    }
    let res = calcWaiting()

    const accordionContent = (
        <StyledText>
            Some content
        </StyledText>
    )

    return (
        <ScrollContainer>
            <AccordionContainer title='Теоретическая часть' content={accordionContent} />
            <Row>
                <StyledText >
                    Температура на поверхности 850 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT850}
                    value={t850}
                />
            </Row>
            <Row>
                <StyledText>
                    Точка росы на поверхности 850 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd850}
                    value={td850}
                />
            </Row>
            <Row>
                <StyledText>
                    Температура на поверхности 700 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT700}
                    value={t700}
                />
            </Row>
            <Row>
                <StyledText>
                    Точка росы на поверхности 700 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd700}
                    value={td700}
                />
            </Row>
            <Row>
                <StyledText>
                    Температура на поверхности 500 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT500}
                    value={t500}
                />
            </Row>
            <StyledText fontStyle='black' size='big' bold>Результат: {res}</StyledText>
        </ScrollContainer>
    );
}


export default Waiting;
