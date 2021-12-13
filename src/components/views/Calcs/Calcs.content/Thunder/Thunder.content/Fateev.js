import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Fateev = () => {
    const [t850, setT850] = useState(0);
    const [deltatd850, setDeltatd850] = useState(0);
    const [deltatd700, setDeltatd700] = useState(0);
    const [t500, setT500] = useState(0);
    const [deltatd500, setDeltatd500] = useState(0);
    const [deltatd600, setDeltatd600] = useState(0);



    let a
    let result
    const calcFateev = () => {
        a = Number(t850) - Number(t500) - (Number(deltatd850) + Number(deltatd700) + Number(deltatd600) + Number(deltatd500))
        a > 0 || a == 0 ? result = 'В прогнозе следует указывать грозу' : result = 'В прогнозе указывать грозу не следует'
        return `A = ${a}, ${result}`
    }
    let res = calcFateev()

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
                    onChangeText={setDeltatd850}
                    value={deltatd850}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 700 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setDeltatd700}
                    value={deltatd700}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 500 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setDeltatd500}
                    value={deltatd500}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 600 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setDeltatd600}
                    value={deltatd600}
                />
            </Row>
            <StyledText fontStyle='black' size='big' bold>Результат: {res}</StyledText>
        </ScrollContainer>
    );
}


export default Fateev;
