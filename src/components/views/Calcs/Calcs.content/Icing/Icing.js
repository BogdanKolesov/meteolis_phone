import React from 'react';
import { icingList } from '../../../../../data/listCalcsData/icingList';
import { ScrollContainer } from '../../../../atoms';
import ListArticles from '../../../../organismes/ListArticles';

const Icing = () => {
    return (
        <ScrollContainer>
            <ListArticles listArticlesData={icingList} />
        </ScrollContainer>
    );
}


export default Icing;
