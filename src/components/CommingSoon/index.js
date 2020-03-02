import React from 'react';
import FastImage from 'react-native-fast-image'

import { 
  EmptyContainer,
  EmptyImage 
} from './styles'

const CommingSoon = props => {
  return (
    <EmptyContainer>
      <EmptyImage
        source={
          require('../../assets/images/em-breve.png')
        }
        resizeMode={FastImage.resizeMode.contain}
      />
    </EmptyContainer>
  );
};

export default CommingSoon;