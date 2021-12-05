import styled from 'styled-components/native';
import { Text } from 'react-native'

export const StyledText = styled.Text`
    font-size: ${({ bigText }) => (bigText ? '22px' : '14px')};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    text-align: ${({ centred }) => (centred ? 'center' : 'auto')};
    text-transform: ${({ lowercase }) => (lowercase ? 'lowercase' : 'none')};

`