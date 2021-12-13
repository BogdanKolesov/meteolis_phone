import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const USThunder = () => {
    const [t850, setT850] = useState(0);
    const [td850, setTd850] = useState(0);
    const [td700, setTd700] = useState(0);
    const [t500, setT500] = useState(0);
    const [td500, setTd500] = useState(0);
    const [td600, setTd600] = useState(0);

    let a
    let result
    const calcUSThunder = () => {
        a = Number(t850) - Number(t500) - (Number(td850) + Number(td700) + Number(td600) + Number(td500))
        a > 0 || a == 0 ? result = 'В прогнозе следует указывать грозу' : result = 'В прогнозе указывать грозу не следует'
        return `A = ${a}, ${result}`
    }
    let res = calcUSThunder()

    const accordionContent = (
        <>
            <StyledText>
                Совершенствуя метод Вайтинга, Н.П. Фатеев предложил использовать для прогноза гроз параметр А, который полнее учитывает распределение влажности по высотам.
            </StyledText>
            <StyledText>
                По Н.П. Фатееву
                А = Т850 –Т500 – (D850+D700+D600+D500). Обозначения в формуле пояснений не требуют. Если по расчетам получается, что А больше 0, то в прогнозе следует указывать грозу.
            </StyledText>
        </>
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
                    Температура на поверхности 500 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT500}
                    value={t500}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 850 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd850}
                    value={td850}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 700 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd700}
                    value={td700}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 500 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd500}
                    value={td500}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 600 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd600}
                    value={td600}
                />
            </Row>
            <StyledText fontStyle='black' size='big' bold>Результат: {res}</StyledText>
        </ScrollContainer>
    );
}


export default USThunder;
