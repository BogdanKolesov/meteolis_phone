import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { calcsData } from '../../../data/calcsData';
import { StyledText } from '../../atoms';
import Category from '../../organismes/Category';

const Calcs = () => {
    return (
        <CalcsContainer>
            <StyledText bold bigText centred>
                Расчётные методы для прогноза явлений погоды
            </StyledText>
            <Category categoryData={calcsData} />
        </CalcsContainer>
    );
}

const CalcsContainer = styled.ScrollView`
    flex: 1;
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
`




export default Calcs;
