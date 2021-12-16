import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const ChartTwoExample = () => {
    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100

                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "green",
                    backgroundGradientTo: "blue",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 0.2) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "1",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 5,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default ChartTwoExample;
