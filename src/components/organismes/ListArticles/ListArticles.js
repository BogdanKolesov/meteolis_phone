import React from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StyledText } from '../../atoms';


const ListArticles = ({ listArticlesData }) => {
    const navigation = useNavigation();

    return (
        <ListArticlesWrapper>
            {
                listArticlesData.map((data, index) => (
                    <ListArticleItem
                        activeOpacity={0.6}
                        key={index}
                        onPress={() => navigation.navigate(data.link)}
                    >
                        <StyledText proto='p' fontStyle='black' centred>
                            {data.title}
                        </StyledText>
                    </ListArticleItem>
                ))
            }
        </ListArticlesWrapper>
    );
}

const ListArticlesWrapper = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`
const ListArticleItem = styled.TouchableOpacity`
    width: 100%;
    min-height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.4);;
    margin: 6px;
`

export default ListArticles;
