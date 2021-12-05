import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { articlesData } from '../../../data/articlesData';
import Category from '../../organismes/Category';

const Articles = () => {
    return (
        <ArticlesContainer>
            <Category categoryData={articlesData} />
        </ArticlesContainer>
    );
}

const ArticlesContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;
`
export default Articles;
