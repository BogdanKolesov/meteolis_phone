import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledButton, StyledInput, StyledText, Row, ScrollContainer } from '../../../../../atoms'
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const Sweat = () => {
    const [t850, setT850] = useState(0);
    const [td850, setTd850] = useState(0);
    const [d850, setD850] = useState(0);
    const [f850, setF850] = useState(0);
    const [t500, setT500] = useState(0);
    const [f500, setF500] = useState(0);
    const [d500, setD500] = useState(0);



    let s
    let result

    const calcSweat = () => {
        const vt = Number(t850) - Number(t500)
        const ct = Number(td850) - Number(t500)
        const tt = Number(ct) + Number(vt)
        const a = (d850 == 130 || d850 == 250 || d850 > 130 || d850 < 250) && (d500 == 210 || d500 == 310 || d500 > 210 && d500 < 310) && ((d500 - d850) > 0 || (d500 - d850) == 0) && (f850 < 7 || f850 == 7) && (f500 < 7 || f500 == 7) ? 0.2 : 0
        s = ((12 * Number(td850)) + (20 * (tt - 49)) + (3.888 * Number(f850)) + (1.944 * f500) + (125 * Math.sin((Number(d500) - Number(d850)) + a)))
        if (s < 250) {
            result = 'Нет условий для возникновения сильных гроз'
        } else if (s > 250 && s < 350 || s == 250 || s == 350) {
            result = 'Есть условия для сильных гроз, града и шквалов'
        } else if (s > 350 && s < 500 || s == 500) {
            result = 'Есть условия для сильных гроз, града и шквалов'
        } else if (s < 500) {
            result = 'Есть условия для сильных гроз, града и шквалов'
        }



        return `VT = ${vt}, CT = ${ct}, TT=${tt} SWEAT = ${s}, ${result}`
    }
    let res = calcSweat()

    const accordionContent = (
        <>
            <StyledText bold>
                SWEAT — Severe Weather ThrEAT индекс
            </StyledText>
            <StyledText>
                CT - Сross Totals индекс
                CT = Td850 - T500
                Td850 — температура точки росы на 850 гПа
                T500 — температура воздуха на 500 гПа.

            </StyledText>
            <StyledText>
                VT — Vertical Totals индекс
                VT = T850 - T500
                T850 — температура воздуха на изобарической поверхности 850 гПа,
                T500 — температура воздуха на 500 гПа.
                VT больше 28 - тропосфера обладает высоким потенциалом конвективной неустойчивости, достаточным для образования гроз.

            </StyledText>
            <StyledText>
                TT — Total Totals индекс
                TT = VT + CT
                CT — Сross Totals индекс,
                VT — Vertical Totals индекс.
            </StyledText>
            <StyledText>
                разработан в ВВС США
                комплексный критерий для диагноза и прогноза опасных и стихийных явлений погоды, связанных с конвективной облачностью, включает в себя индекс неустойчивости воздушной массы, скорость и сдвиг ветра.
                SWEAT=12⋅Td850+20⋅(TT-49)+3.888⋅F850+1.944⋅F500+ (125⋅[sin(D500 - D850)+0.2])
                Td850 — температура точки росы на 850 гПа (в градусах Цельсия),
                TT — Total Totals индекс,
                F850 — скорость ветра на 850 гПа (м/с),
                F500 — скорость ветра на 500 гПа (м/с),
                D500 и D850 — направление ветра на соответствующих поверхностях. (в градусах)
                Второй член уравнения установить в 0, если TT ≤ 49;
                Последнее слагаемое в формуле будет равно нулю, если не выполняется любое из следующих условий:
                - D850 в диапазоне от 130 до 250 градусов;
                - D500 в диапазоне от 210 до 310 градусов;
                - Разность в направлении ветра (D500 - D850) положительна;
                - F850 и F500 скорости ветра ≤ 7 м/с.
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
                <StyledText >
                    Дефицит точки росы на поверхности 850 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setTd850}
                    value={td850}
                />
            </Row>
            <Row>
                <StyledText >
                    Направление ветра на поверхности 850 ГПа (в градусах):
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setD850}
                    value={d850}
                />
            </Row>
            <Row>
                <StyledText >
                    Скорость ветра на поверхности 850 ГПа (в м/с):
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setF850}
                    value={f850}
                />
            </Row>
            <Row>
                <StyledText >
                    Температура на поверхности 500 ГПа:
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setT500}
                    value={t500}
                />
            </Row>
            <Row>
                <StyledText >
                    Направление ветра на поверхности 500 ГПа (в градусах):
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setD500}
                    value={d500}
                />
            </Row>
            <Row>
                <StyledText >
                    Скорость ветра на поверхности 500 ГПа (в м/с):
                </StyledText>
                <StyledInput
                    keyboardType='numeric'
                    onChangeText={setF500}
                    value={f500}
                />
            </Row>


            <StyledText fontStyle='black' size='big' bold>Результат: {res}</StyledText>
        </ScrollContainer>

    );
}


export default Sweat;
