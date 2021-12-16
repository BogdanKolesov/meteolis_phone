import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'

const Chartexample = () => {
    return (
        <View>
            <Chart
                style={{ height: 400, width: 400 }}
                data={[
                    {
                        x: 5, get y() {
                            return Number((17.53 + (1.64 * Number(this.x)) - (0.26 * (Number(this.x) ** 2)) + (0.02 * (Number(this.x) ** 3)) - (0.0007 * (Number(this.x) ** 4)) + (9.606 * (10 ** -6) * (Number(this.x) ** 5))).toFixed(2))
                        }
                    },
                    {
                        x: 10, get y() {
                            return Number((17.53 + (1.64 * Number(this.x)) - (0.26 * (Number(this.x) ** 2)) + (0.02 * (Number(this.x) ** 3)) - (0.0007 * (Number(this.x) ** 4)) + (9.606 * (10 ** -6) * (Number(this.x) ** 5))).toFixed(2))
                        }
                    },
                    {
                        x: 15, get y() {
                            return Number((17.53 + (1.64 * Number(this.x)) - (0.26 * (Number(this.x) ** 2)) + (0.02 * (Number(this.x) ** 3)) - (0.0007 * (Number(this.x) ** 4)) + (9.606 * (10 ** -6) * (Number(this.x) ** 5))).toFixed(2))
                        }
                    },
                    {
                        x: 20, get y() {
                            return Number((17.53 + (1.64 * Number(this.x)) - (0.26 * (Number(this.x) ** 2)) + (0.02 * (Number(this.x) ** 3)) - (0.0007 * (Number(this.x) ** 4)) + (9.606 * (10 ** -6) * (Number(this.x) ** 5))).toFixed(2))
                        }
                    },
                    {
                        x: 25, get y() {
                            return Number((17.53 + (1.64 * Number(this.x)) - (0.26 * (Number(this.x) ** 2)) + (0.02 * (Number(this.x) ** 3)) - (0.0007 * (Number(this.x) ** 4)) + (9.606 * (10 ** -6) * (Number(this.x) ** 5))).toFixed(2))
                        }
                    },
                    {
                        x: 30, get y() {
                            return Number((17.53 + (1.64 * Number(this.x)) - (0.26 * (Number(this.x) ** 2)) + (0.02 * (Number(this.x) ** 3)) - (0.0007 * (Number(this.x) ** 4)) + (9.606 * (10 ** -6) * (Number(this.x) ** 5))).toFixed(2))
                        }
                    },

                ]}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: 5, max: 30 }}
                yDomain={{ min: 21, max: 30 }}
            >
                <VerticalAxis tickCount={6} theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
                <HorizontalAxis tickCount={6} />
                {/* <Area theme={{ gradient: { from: { color: 'blue' }, to: { color: 'yellow', opacity: 0.2 } } }} /> */}
                <Line tooltipComponent={<Tooltip />} smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'blue', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 8 } } }} />
                {/* <Line
                    data={[
                        { x: -2, y: 0 },
                        { x: -1, y: 2 },
                        { x: 0, y: 7 },
                        { x: 2, y: 5 },
                        { x: 3, y: 12 },
                        { x: 7, y: 16 },
                        { x: 9, y: 17 },
                        { x: 10, y: 12 },
                    ]}
                    tooltipComponent={<Tooltip />} smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'green', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 8 } } }} /> */}
            </Chart>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chartexample;

// let x = 5
// let y = 17.53 + (1.64 * Number(x)) - (0.26 * (Number(x) ** 2)) + (0.02 * (Number(x) ** 3)) - (0.0007 * (Number(x) ** 4)) + (9.606 * (10 ** -6) * (Number(x) ** 5))
// console.log(Number(y.toFixed(2)))