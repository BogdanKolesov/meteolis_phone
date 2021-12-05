import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Article = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
}

export default Article;
