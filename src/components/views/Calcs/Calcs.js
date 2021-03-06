import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { calcsData } from '../../../data/calcsData';
import { ScrollContainer, StyledText } from '../../atoms';
import Category from '../../organismes/Category';

const Calcs = () => {
    return (
        <ScrollContainer>
            <StyledText bold bigText centred>
                Расчётные методы для прогноза явлений погоды
            </StyledText>
            <Category categoryData={calcsData} />
        </ScrollContainer>
    );
}

export default Calcs;
