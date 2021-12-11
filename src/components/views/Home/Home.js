import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import WeatherMap from '../../../../assets/weatherMap.jpg'
import LottieView from 'lottie-react-native';
import { StyledText } from '../../atoms';
// import BottomTabs from '../../organismes/BottomTabs';

const Home = () => {
    return (
        <HomeContainer>
            <TextContainer>
                <StyledImage source={WeatherMap} />
                <StyledText bold centred size='big'>
                    Проект Meteolis
                </StyledText>
                <StyledText>
                    Данный проект создан метеорологами для метеорологов.
                </StyledText>
                <StyledText>
                    Больше о нас Вы можете узнать по этой ссылке.
                </StyledText>
                <StyledText>
                    Контакты
                </StyledText>
            </TextContainer>
            <StyledAnimation source={require('../../../../assets/lottie/plane.json')} autoPlay />
        </HomeContainer>
    );
}

const HomeContainer = styled.View`
    flex: 1;
    position: relative;
    background-color: #fff;
`

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

const StyledAnimation = styled(LottieView)`
    width: 100%;
    position: absolute;
    bottom: 0;
    left:0;
`

export default Home;
