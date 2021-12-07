import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { CodesData } from '../../../data/codesData';
import { ScrollContainer, StyledText } from '../../atoms';
import Category from '../../organismes/Category';

const Calcs = () => {
    return (
        <ScrollContainer>
            <StyledText bold bigText centred>
                Приём, кодирование и раскодирование метеорологических кодов
            </StyledText>
            <Category categoryData={CodesData} />
        </ScrollContainer>
    );
}






export default Calcs;
