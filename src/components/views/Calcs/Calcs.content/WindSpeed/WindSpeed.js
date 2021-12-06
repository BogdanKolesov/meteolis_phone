import React from 'react';
import { windSpeedList } from '../../../../../data/listCalcsData/windSpeedList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const WindSpeed = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={windSpeedList} />
        </ScrollContainer>
    );
}


export default WindSpeed;
