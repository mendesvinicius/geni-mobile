import React from 'react';
import FastImage from 'react-native-fast-image'

import { 
  EmptyContainer,
  EmptyImage 
} from './styles'

const EmptyList = props => {
  return (
    <EmptyContainer>
      <EmptyImage
        source={
          require('../../assets/images/nada-encontrado.png')
          }
        resizeMode={FastImage.resizeMode.contain}
      />
    </EmptyContainer>
  );
};

export default EmptyList;