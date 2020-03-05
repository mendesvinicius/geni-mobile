import React from 'react';

import { HeaderRibbon } from '../../components'

import FastImage from 'react-native-fast-image'
import { Text, View } from 'react-native'

import {
    Container,
    Banner,
    CategoriesList,
    CategoryContainer,
    ItemContainer,
    CategoryImage
  } from './styles'

// import { Container } from './styles';

const ViewComponent = ({
    categories,
    images,
    navigateToCategory
}) => {
    return (
    <Container>
        <HeaderRibbon />
        <Banner
            resize='cover'
            fallback={true}
            source={
            require('../../assets/images/home-banner.jpg')
            }
        />

        <CategoryContainer>
            <CategoriesList
                data={categories}
                numColumns={2}
                renderItem={({item, index, separators}) => {
                    
                    return (
                            <ItemContainer
                                keys={index}
                                onPress={() => navigateToCategory(item.category)}
                                activeOpacity={0.7} >
                                <CategoryImage
                                    source={images[index]}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </ItemContainer>
                        )
                    }}
            />
        </CategoryContainer>
    </Container>
    )
}

export default ViewComponent
