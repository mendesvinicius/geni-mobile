import React from 'react';
import FastImage from 'react-native-fast-image'

import { Text } from 'react-native'

import { Container, Ribbon } from './styles';

const HeaderRibbon = () => {
  const ribbonImg = require('../../assets/images/header-tira.png')
  return (
    <Container>
       <Ribbon
        source={
          require('../../assets/images/header-tira.png')
          // {
          //   cache: FastImage.cacheControl.immutable
          // }
        }
        resizeMode={FastImage.resizeMode.cover}
    />
    </Container>
  )
};

export default HeaderRibbon;
