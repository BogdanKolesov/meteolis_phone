import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Waiting = () => {
    const [t850, setT850] = useState('');
    const [deltatd850, setDeltatd850] = useState('');
    const [t700, setT700] = useState('');
    const [deltatd700, setDeltatd700] = useState('');
    const [t500, setT500] = useState('');

    let k
    let result
    const calcWaiting = () => {

        k = 2 * Number(t850) - Number(t500) - Number(deltatd850) - Number(deltatd700)
        if (k < 20) {
            result = 'Гроз ожидать не следует'
        } else if (k == 20 || k == 25 || (k > 20 && k < 25)) {
            result = 'Следует ожидать изолированные грозы'
        } else if (k == 30 || (k > 25 && k < 30)) {
            result = 'В прогнозе следует указать отдельные грозы'
        } else if (k > 30) {
            result = 'Грозы повсеместно'
        }
        return `k = ${k}, ${result}`
    }
    let res = calcWaiting()

    const accordionContent = (
        <>
            <StyledText bold>Метод Вайтинга</StyledText>
            <StyledText>
                Основан на расчете по данным утреннего зондирования параметра К
                К = 2Т850 –Т500 – D850 - D700
                Т – температура,  D – дефицит температуры точки росы на соответствующем уровне
                К меньше 20 - гроз ожидать не следует
                20  К больше 25 - следует ожидать изолированные грозы
                25 меньше К больше 30 - в прогнозе следует указывать отдельные грозы
                К больше 30 – грозы повсеместно
                Хорошие результаты при прогнозе гроз не по пункту, а по площади. 
	Синоптик  строит карту изолиний коэффициента К через 5 единиц, начиная со значения 20. -> Очаг с максимальным значением коэффициента переносится по потоку на 12 часов, и в том районе, где этот очаг окажется, следует указывать грозы.
            </StyledText>
            <StyledText>
                Метод получил достаточно широкое распространение по территории России.
                Значения коэффициента К целесообразно уточнять для каждого пункта.
                Иногда в рассчитанные значения коэффициента К вводится поправка на кривизну приземных изобар.
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
                    Дефицит точки росы на поверхности 850 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setDeltatd850}
                    value={deltatd850}
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
                    Дефицит точки росы на поверхности 700 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setDeltatd700}
                    value={deltatd700}
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
