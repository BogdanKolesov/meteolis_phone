import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import WeatherMap from '../../../../assets/weatherMap.jpg'
// import BottomTabs from '../../organismes/BottomTabs';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <TextContainer>
                    <StyledImage source={WeatherMap} />
                    <Title>
                        Проект Meteolis
                    </Title>
                    <Description>
                        Данный проект создан метеорологами для метеорологов.
                    </Description>
                </TextContainer>
            </ScrollView>
        </SafeAreaView>
    );
}

const TextContainer = styled.View`
    marginTop: 10;
    marginHorizontal: 10;
`

const Title = styled.Text`
    color: black;
    fontSize: 40;
    fontWeight: bold;
`
const Description = styled.Text`
    color: black;
    fontSize: 20;
`

const StyledImage = styled.Image`
    width: 100%;
    height: 60px;
`

export default Home;
