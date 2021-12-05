import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import WeatherMap from '../../../../assets/weatherMap.jpg'
// import BottomTabs from '../../organismes/BottomTabs';

const Home = () => {
    return (
        <ScrollView>
            <TextContainer>
                <StyledImage source={WeatherMap} />
                <Title>
                    Проект Meteolis
                </Title>
                <Description>
                    Данный проект создан метеорологами для метеорологов.
                </Description>
                <Description>
                    Больше о нас Вы можете узнать по этой ссылке.
                </Description>
                <Description>
                    Контакты
                </Description>
            </TextContainer>
        </ScrollView>
    );
}

const TextContainer = styled.View`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;

`

const Title = styled.Text`
    color: black;
    font-size: 40px;
    font-weight: bold;
`
const Description = styled.Text`
    color: black;
    font-size: 20px;
`

const StyledImage = styled.Image`
    width: 100%;
    height: 60px;
`

export default Home;
