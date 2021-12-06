import React from 'react';
import { synopticList } from '../../../../../data/listArticleData/synopticList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Synoptic = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={synopticList} />
        </ScrollContainer>
    );
}


export default Synoptic;
