import React from 'react';
import { turbulenceList } from '../../../../../data/listCalcsData/turbulenceList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Turbulence = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={turbulenceList} />
        </ScrollContainer>
    );
}


export default Turbulence;
