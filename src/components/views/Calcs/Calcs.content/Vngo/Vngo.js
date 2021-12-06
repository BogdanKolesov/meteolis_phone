import React from 'react';
import { vngoList } from '../../../../../data/listCalcsData/vngoList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Vngo = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={vngoList} />
        </ScrollContainer>
    );
}


export default Vngo;
