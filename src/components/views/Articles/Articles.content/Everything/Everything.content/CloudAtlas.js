import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AccordionContainer from '../../../../../molecules/AccordionContainer';

const CloudAtlas = () => {
    const title = (
        <Text>Title</Text>
    )

    const content = (
        <Text>Content</Text>
    )

    return (
        <View>
            <AccordionContainer content={content} title={title} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CloudAtlas;
