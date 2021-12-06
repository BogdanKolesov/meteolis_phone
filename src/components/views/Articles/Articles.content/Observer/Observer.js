import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observerList } from '../../../../../data/listArticleData/observerList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Observer = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={observerList} />
        </ScrollContainer>
    );
}


export default Observer;
