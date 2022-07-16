import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'
//

const Baily = () => {
    const [deltaTd700, setDeltaTd700] = useState(0);
    const [deltaTd600, setDeltaTd600] = useState(0);
    const [t850, setT850] = useState(0);
    const [t500, setT500] = useState(0);
    const [calcedX, setCalcedX] = useState(0);
    const [calcedY, setCalcedY] = useState(0);


    const res = () => {
        setCalcedX(Number(deltaTd700) - Number(deltaTd600))

        setCalcedY(Number(t850) - Number(t500))
        console.log(calcedY)

        return calcedX, calcedY
    }

    const accordionContent = (
        <>
            <StyledText bold>
                Метод Бейли
            </StyledText>
            <StyledText>
                Используется обычно в сочетании с другими методами.
                Если в районе выполняется хотя бы один из признаков, то гроза не ожидается:

                1. На любом уровне в слое 850 – 700 гПа дефицит температуры точки росы равен или больше 13°
                2. Сумма дефицитов температуры точки росы на уровнях 700 и 600 гПа больше или равна 28°
                3. Заметная на картах барической топографии адвекция сухого воздуха на уровнях 850 и 700 гПа
                4. Вертикальный градиент температуры в слое 850 – 500 гПа равен или меньше 0,5°/100 м.
                5. Уровень замерзания (Т= -12°С) располагается ниже высоты 3600 м. В этом случае из развивающихся облаков могут выпадать только слабые ливневые осадки.
            </StyledText>
        </>
    )

    return (
        <ScrollContainer>
            <AccordionContainer title='Теоретическая часть' content={accordionContent} />
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 700 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setDeltaTd700}
                    value={deltaTd700}
                />
            </Row>
            <Row>
                <StyledText>
                    Дефицит точки росы на поверхности 600 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setDeltaTd600}
                    value={deltaTd600}
                />
            </Row>
            <Row>
                <StyledText>
                    Температура на поверхности 850 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT850}
                    value={t850}
                />
            </Row>
            <Row>
                <StyledText>
                    Температура на поверхности 500 ГПа
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT500}
                    value={t500}
                />
            </Row>
            <StyledButton onPress={res}><StyledText>Выполнить расчёт!</StyledText></StyledButton>

            <StyledText fontStyle='black' size='big' bold>Результат:</StyledText>
        </ScrollContainer>
    );
}


export default Baily;
