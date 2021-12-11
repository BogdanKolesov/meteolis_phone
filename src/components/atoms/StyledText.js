import styled from 'styled-components/native';
import { Text } from 'react-native'

export const StyledText = styled.Text`
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    text-align: ${({ centred }) => (centred ? 'center' : 'auto')};
    text-transform: ${({ lowercase }) => (lowercase ? 'lowercase' : 'none')};
    font-size: ${({ size }) => (size === 'small' ? '16px' :
        'medium' ? '18px'
            : 'big' ? '20px'
                : 'header' ? '22px'
                    : '18px'
    )};
    font-family: ${({ fontStyle }) => (fontStyle
        == 'thin' ? 'Roboto_100Thin'
        : 'light' ? 'Roboto_300Light'
            : 'regular' ? 'Roboto_400Regular'
                : 'bold' ? 'Roboto_700Bold'
                    : 'black' ? 'Roboto_900Black'
                        : 'Roboto_400Regular')
    };
`