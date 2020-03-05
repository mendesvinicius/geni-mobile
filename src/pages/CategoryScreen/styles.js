
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image'

export const BackButton = styled.TouchableOpacity`
  margin-left: 20px;
  height: 30px;
  width: 30px;
  justify-content: center;
`

export const PageTitle = styled.Text`
  margin-right: 20px;
`

export const Container = styled.View`
  background-color: #FFFF;
  height: 100%;
`

export const EstablishmentsList = styled.FlatList`

`

export const EstablishmentItem = styled.TouchableOpacity`
  height: 220px;
  width: 100%;
  padding: 13px;
  margin-bottom: 15px;
  background-color: white;
`

export const EstablishmentImage = styled(FastImage)`
  height: 139px;
`

export const EstablishmentInfoContainer = styled.View`
  flex-direction: row;
  margin: 0 17px;
  justify-content: space-between;
`

export const EstablishmentTitleContainer = styled.View``

export const EstablishmentTitle = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 13px;
  color: #833074;
  font-weight: bold;
`

export const EstablishmentCategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const EstablishmentText = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 9px;
  color: #918F8E;
  margin-right: ${props => !props.adress ? 10 : 0};
  text-align: {${props => props.adress ? 'right' : 'left'};
`

export const EstablishmentAdressContainer = styled.View``
