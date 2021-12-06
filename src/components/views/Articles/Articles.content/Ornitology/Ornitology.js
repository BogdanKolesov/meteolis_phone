import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { ornitologyList } from '../../../../../data/listArticleData/ornitologyList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Ornitology = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={ornitologyList} />
        </ScrollContainer>
    );
}


export default Ornitology;
