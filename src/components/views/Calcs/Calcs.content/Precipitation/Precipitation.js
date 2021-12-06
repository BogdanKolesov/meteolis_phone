import React from 'react';
import { precipitationList } from '../../../../../data/listCalcsData/precipitationList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Precipitation = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={precipitationList} />
        </ScrollContainer>
    );
}


export default Precipitation;
