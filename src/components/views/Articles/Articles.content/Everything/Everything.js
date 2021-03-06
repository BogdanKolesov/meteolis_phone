import React from 'react';
import { everythingList } from '../../../../../data/listArticleData/everythingList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Everything = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={everythingList} />
        </ScrollContainer>
    );
}


export default Everything;
