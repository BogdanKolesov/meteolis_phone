import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { calcsData } from '../../../data/calcsData';
import Category from '../../organismes/Category';

const Calcs = () => {
    return (
        <CalcsContainer>
            <Category categoryData={calcsData} />
        </CalcsContainer>
    );
}

const CalcsContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;
`




export default Calcs;
