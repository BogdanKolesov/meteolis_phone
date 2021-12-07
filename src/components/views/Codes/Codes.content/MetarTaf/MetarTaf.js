import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { StyledButton, StyledInput, StyledText } from '../../../../atoms';

const MetarTaf = () => {
    return (
        <ScrollView>
            <MetarTafContainer>
                <StyledText bold bigText centred>
                    Metar/Taf декодер
                </StyledText>
                <InputContainer>
                    <StyledInput />
                    <StyledInput />
                    <StyledInput />
                    <StyledInput />
                    <StyledInput />
                    <StyledInput />
                    <StyledInput />
                    <StyledInput />
                </InputContainer>
                <StyledButton>
                    <StyledText bold bigText centred>
                        Обновить
                    </StyledText>
                </StyledButton>
                <MetarTafContent>

                </MetarTafContent>
            </MetarTafContainer>
        </ScrollView>
    );
}

const MetarTafContainer = styled.View`
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
`

const InputContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const MetarTafContent = styled.View`

`



export default MetarTaf;
