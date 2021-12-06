import React from 'react';
import { thunderList } from '../../../../../data/listCalcsData/thunderList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Thunder = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={thunderList} />
        </ScrollContainer>
    );
}


export default Thunder;
