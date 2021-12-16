import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'

const Chartexample = () => {
    return (
        <View>
            <Chart
                style={{ height: 200, width: 400 }}
                data={[
                    { x: 0, y: 0 },
                    { x: 1, get y() { return Math.floor(Math.exp(this.x + 1)) } },
                    { x: 2, get y() { return Math.floor(Math.exp(this.x + 1)) } },
                    { x: 3, get y() { return Math.floor(Math.exp(this.x + 1)) } },
                    { x: 4, get y() { return Math.floor(Math.exp(this.x + 1)) } },
                    { x: 5, get y() { return Math.floor(Math.exp(this.x + 1)) } },
                ]}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: 0, max: 10 }}
                yDomain={{ min: 0, max: 200 }}
            >
                <VerticalAxis tickCount={2} theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
                <HorizontalAxis tickCount={5} />
                <Area theme={{ gradient: { from: { color: 'blue' }, to: { color: 'yellow', opacity: 0.2 } } }} />
                <Line tooltipComponent={<Tooltip />} smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'blue', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 8 } } }} />
                <Line
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
                    tooltipComponent={<Tooltip />} smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'green', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 8 } } }} />
            </Chart>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chartexample;
