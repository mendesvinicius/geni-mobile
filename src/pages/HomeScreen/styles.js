import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
`;

export const Banner = styled(FastImage)`
  height: 219px;
  width: 100%;
`

export const CategoriesList = styled.FlatList`
`

export const CategoryContainer = styled.View`
  width: 310px;
  height: 300px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`

export const ItemContainer = styled.TouchableOpacity`
  height: 150px;
  width: 150px;
  align-items: center;
  justify-content: center;
`

export const CategoryImage = styled(FastImage)`
  height: 100px;
  width: 110px;
`
