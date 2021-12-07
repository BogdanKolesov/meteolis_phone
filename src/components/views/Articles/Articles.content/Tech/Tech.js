import React from 'react';
import { techList } from '../../../../../data/listArticleData/techList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Tech = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={techList} />
        </ScrollContainer>
    );
}


export default Tech
