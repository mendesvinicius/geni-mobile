import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'

export const Container = styled.View`
  height: 22px;
  width: ${Dimensions.get('window').width};
`;

export const Ribbon = styled(FastImage)`
  height: 100%;
  width: ${Dimensions.get('window').width};
`
