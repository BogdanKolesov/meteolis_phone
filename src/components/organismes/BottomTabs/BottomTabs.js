import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const BottomTabs = () => {
    return (
        <BottomContainer>
            <Text>Text</Text>
        </BottomContainer>
    );
}

const BottomContainer = styled.View`
    width: '100%';
    height: 50;
`

export default BottomTabs;
