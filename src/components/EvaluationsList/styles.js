
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image'

export const Container = styled.View`
  background-color: #F2F2F2;
  height: 100%;
`

export const EvaluationsFlatList = styled.FlatList`
  padding: 13px;
  border-radius: 5px;
  margin-top: -10px;
`

export const StarsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const EvaluationItem = styled.View`
  /* height: 220px; */
  width: 100%;
  padding: 13px;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: white;
`

export const EvaluationInfoContainer = styled.View`
  margin-bottom: 10px;
`

export const EvaluationTitleContainer = styled.View``

export const EvaluationTitle = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 18px;
  color: #833074;
  font-weight: bold;
`

export const EvaluationUserName = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 9px;
  color: #918F8E;
`

export const EvaluationCategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const EvaluationText = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  color: #918F8E;
  margin-bottom: 10px;
  
`

export const EvaluationDescriptionContainer = styled.View``


export const DescriptionTitle = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 17px;
  color: rgb(48,49,51);
  font-weight: bold;
  margin-right: ${props => props.moreInfo ? 10 : 0}
`

export const EvaluationMoreInfo = styled.View`
`