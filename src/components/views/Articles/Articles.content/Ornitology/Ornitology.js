import React from 'react';
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
