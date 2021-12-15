import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'

const Chartexample = () => {
    return (
        <View>
            <Chart
                style={{ height: 200, width: 400 }}
                data={[
                    { x: 0, get y() { return Math.exp(this.x + 1) } },
                    { x: 1, get y() { return Math.exp(this.x + 1) } },
                    { x: 2, get y() { return Math.exp(this.x + 1) } },
                    { x: 3, get y() { return Math.exp(this.x + 1) } },
                    { x: 4, get y() { return Math.exp(this.x + 1) } },
                    { x: 5, get y() { return Math.exp(this.x + 1) } },

                ]}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: 0, max: 10 }}
                yDomain={{ min: 0, max: 20 }}
            >
                <VerticalAxis tickCount={2} theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
                <HorizontalAxis tickCount={5} />
                <Area theme={{ gradient: { from: { color: 'blue' }, to: { color: 'yellow', opacity: 0.2 } } }} />
                <Line tooltipComponent={<Tooltip />} smoothing='bezier' tension='0.3' theme={{ stroke: { color: 'blue', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 8 } } }} />
            </Chart>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chartexample;
