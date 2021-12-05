import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { StyledText } from '../../atoms';
import { useNavigation } from '@react-navigation/native';


const Category = ({ categoryData }) => {
    const navigation = useNavigation();
    return (
        <CategoryWrapper>
            {
                categoryData.map((data, index) => (
                    <CategoryContainer
                        activeOpacity={0.6}
                        key={index}
                        onPress={() => navigation.navigate(data.link)}
                    >
                        <CategoryContent>
                            <StyledText bold bigText centred>{data.category}</StyledText>
                            <StyledText centred lowercase>{data.point}</StyledText>
                        </CategoryContent>
                        <CategoryBackground source={data.image} />
                    </CategoryContainer>
                ))
            }
        </CategoryWrapper>
    );
}

const CategoryWrapper = styled.View`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`

const CategoryContainer = styled.TouchableOpacity`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    
`
const CategoryContent = styled.View`
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10%;
    border-radius: 5px;
`
const CategoryBackground = styled.Image`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    z-index: 0;
    border-radius: 5px;
`





export default Category;
