import React from 'react';
import { fogList } from '../../../../../data/listCalcsData/fogList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Fog = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={fogList} />
        </ScrollContainer>
    );
}


export default Fog;
