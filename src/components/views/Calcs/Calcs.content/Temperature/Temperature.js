import React from 'react';
import { temperatureList } from '../../../../../data/listCalcsData/temperatureList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Temperature = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={temperatureList} />
        </ScrollContainer>
    );
}


export default Temperature;
