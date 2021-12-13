import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Ki = () => {
    const [t850, setT850] = useState('');
    const [td850, setTd850] = useState('');
    const [deltatd700, setDeltatd700] = useState('');
    const [t500, setT500] = useState('');

    let ki
    let result
    const calcKi = () => {
        let p

        ki = Number(t850) - Number(t500) + Number(td850) - Number(deltatd700)
        if (ki < 20) {
            result = 'без гроз'
        } else if (ki == 20 || ki == 25 || (ki > 20 && ki < 25)) {
            result = 'отдельные изолированные грозы, покрывают не более 10% площади территории, по которой составлен прогноз'
        } else if (ki == 30 || (ki > 25 && ki < 30)) {
            result = 'несколько гроз, покрывают не более 10-20% площади территории, по которой составлен прогноз'
        } else if (ki == 35 || (ki > 30 && ki < 30)) {
            result = 'рассеяные грозы, покрывают 20-50% площади территории'
        } else if (ki == 40 || (ki > 35 && ki < 40)) {
            result = 'многочисленные грозы, покрывают 50-70% территории'
        } else if (ki > 40) {
            result = 'грозы повсеместно, грозовые очаги занимают более 70% территории'
        }

        if (ki < 20) {
            p = ''
        } else if (ki == 20 || ki == 22 || (ki > 20 && ki > 22)) {
            p = ', вероятность грозы 50%, отдельные грозы'
        } else if (ki == 25 || (ki > 22 && ki < 25)) {
            p = ', вероятность грозы 60%, отдельные грозы'
        } else if (ki == 28 || (ki > 25 && ki < 28)) {
            p = ', вероятность грозы 75%, редко разбросанные грозы'
        } else if (ki == 31 || (ki > 28 && ki < 31)) {
            p = ', вероятность грозы 80%, редко разбросанные грозы'
        } else if (ki == 34 || (ki > 31 && ki < 34)) {
            p = ', вероятность грозы 90%, грозы'
        } else if (ki == 37 || (ki > 34 && ki < 37)) {
            p = ', вероятность грозы 95%, многочисленные грозы'
        } else if (ki > 37) {
            p = ', вероятность грозы 100%, грозы повсеместно'
        }

        return `Ki = ${ki} ${p}, ${result}`
    }
    let res = calcKi()

    const accordionContent = (
        <>
            <StyledText bold>
                Ki (число Вайтинга)
            </StyledText>
            <StyledText>
                Рассчет Ki основан на вертикальном градиенте температуры, влажности воздуха в нижней тропосфере, а также учитывает вертикальную протяженность влажного слоя воздуха.
                Ki характеризует степень конвективной неустойчивости воздушной массы, которая необходима для возникновения и развития гроз.
                Ki=T850-T500+Td850-ΔTd700.
                Ki — индекс неустойчивости,
                T850 — температура воздуха на изобарической поверхности 850 гПа,
                T500 — температура воздуха на 500 гПа,
                Td850 — температура точки росы на 850 гПа,
                ΔTd700 — дефицит точки росы (T-Td) на поверхности 700 гПа.
            </StyledText>
            <StyledText>
                Ki лучше всего использовать в летний период для прогнозирования внутримассовых гроз. Пороговые значения  могут изменяться в зависимости от сезона, географии и синоптической ситуации.
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
                    Точка росы на поверхности 850 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd850}
                    value={td850}
                />
            </Row >
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


export default Ki;
