import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'

const Chartexample = () => {
    const dat = [{
        x: 5, y: 5
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
        <View>
            <Chart
                style={{ height: 400, width: 400 }}
                data={[
                    { x: 5, y: 21 },
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
                    smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'red', width: 2 }, }}
                />
            </Chart>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chartexample;

// let x = 5
// let y = 17.53 + (1.64 * Number(x)) - (0.26 * (Number(x) ** 2)) + (0.02 * (Number(x) ** 3)) - (0.0007 * (Number(x) ** 4)) + (9.606 * (10 ** -6) * (Number(x) ** 5))
// console.log(Number(y.toFixed(2)))