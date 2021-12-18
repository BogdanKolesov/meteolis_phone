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

    const dat = [{
        x: calcedX, y: calcedY
    }]

    const firstLine = [
        {
            x: 5, get y() {
                return Number(21.1262 + 0.144111 * this.x - 0.0316082 * this.x ** 2 + 0.00311575 * this.x ** 3 - 0.00012285 * this.x ** 4 + 2.02651 * 10 ** -6 * this.x ** 5)
            }
        },
        {
            x: 10, get y() {
                return Number(21.1262 + 0.144111 * this.x - 0.0316082 * this.x ** 2 + 0.00311575 * this.x ** 3 - 0.00012285 * this.x ** 4 + 2.02651 * 10 ** -6 * this.x ** 5)
            }
        },
        {
            x: 15, get y() {
                return Number(21.1262 + 0.144111 * this.x - 0.0316082 * this.x ** 2 + 0.00311575 * this.x ** 3 - 0.00012285 * this.x ** 4 + 2.02651 * 10 ** -6 * this.x ** 5)
            }
        },
        {
            x: 20, get y() {
                return Number(21.1262 + 0.144111 * this.x - 0.0316082 * this.x ** 2 + 0.00311575 * this.x ** 3 - 0.00012285 * this.x ** 4 + 2.02651 * 10 ** -6 * this.x ** 5)
            }
        },
        {
            x: 25, get y() {
                return Number(21.1262 + 0.144111 * this.x - 0.0316082 * this.x ** 2 + 0.00311575 * this.x ** 3 - 0.00012285 * this.x ** 4 + 2.02651 * 10 ** -6 * this.x ** 5)
            }
        },
        {
            x: 30, get y() {
                return Number(21.1262 + 0.144111 * this.x - 0.0316082 * this.x ** 2 + 0.00311575 * this.x ** 3 - 0.00012285 * this.x ** 4 + 2.02651 * 10 ** -6 * this.x ** 5)
            }
        },
    ]

    const secondLine = [
        {
            x: 5, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 10, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 15, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 17, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 19, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 21, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 23, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 25, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 28, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
        {
            x: 31, get y() {
                return Number((15.7676 + 3.47887 * this.x - 0.6217 * this.x ** 2 + 0.0518963 * this.x ** 3 - 0.00201696 * this.x ** 4 + 0.0000300287 * this.x ** 5).toFixed(3))
            }
        },
    ]

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
            <Chart
                style={{ height: 400, width: '100%' }}
                data={[
                    { x: 0, y: 0 },
                ]}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: 5, max: 30 }}
                yDomain={{ min: 21, max: 30 }}
            >
                <VerticalAxis tickCount={12} theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
                <HorizontalAxis tickCount={6} theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
                <Area data={firstLine} smoothing='bezier' theme={{ gradient: { from: { color: 'blue' }, to: { color: 'blue', opacity: 0.1 } } }} />
                <Area data={secondLine} smoothing='bezier' theme={{ gradient: { from: { color: 'red' }, to: { color: 'red', opacity: 0.1 } } }} />
                <Line tooltipComponent={<Tooltip />} smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'blue', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 8 } } }} />
                <Line
                    data={firstLine}
                    smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'blue', width: 2 } }}
                />
                <Line
                    data={secondLine}
                    smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'red', width: 2 } }}
                />
                <Line
                    tooltipComponent={<Tooltip />}
                    data={dat}
                    smoothing='bezier' tension='0.3'
                    theme={{ stroke: { color: '#44bd32', width: 5 }, scatter: { default: { width: 8, height: 8, rx: 4, color: 'red' }, selected: { color: 'gray' } } }}
                />
            </Chart>
            <StyledText fontStyle='black' size='big' bold>Результат:</StyledText>
        </ScrollContainer>
    );
}


export default Baily;
