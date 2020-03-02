
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image'

export const Container = styled.View`
  flex: 1;
`;

export const TabBar = styled.ScrollView`
  max-height: 40px;
  background-color: #f2f2f2;
  margin-bottom: 16px;
`

export const Tab = styled.TouchableOpacity`
  padding: 11px 0 4px;
  margin: 0 16px;
  min-height: 38px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-bottom-width: 4px;
  border-bottom-color: ${props => props.isFocused ? '#7FA01D' : '#f2f2f2'};
`

export const TabText = styled.Text`
  font-family: ${props => props.isFocused ? 'Raleway-Medium' : 'Raleway-Regular'};
  font-size: 16px;
  line-height: 16px;
  color: ${props => props.isFocused ? 'rgb(48,49,51)' : '#918F8E'};
`

export const Banner = styled(FastImage)`
  height: 150px;
  width: 100%;
`
export const QuickInfoContainer = styled.View`
  background-color: #f2f2f2;
  align-items: center;
  margin: 15px auto 0;
  height: 120px;
  width: 200px;
`

export const EstablishmentTitle = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 20px;
  color: #555555;
  font-weight: bold;
`

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const RatingCount = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 12px;
  color: #555555;
`

export const MakeEvaluationButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background-color: #7FA01D;
`

export const MakeEvaluationText = styled.Text`
  font-family: 'Raleway-Medium';
  margin-left: 5px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`

export const ContainerDescription = styled.View`
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 15px;
`

export const DescriptionTitle = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 17px;
  color: rgb(48,49,51);
  font-weight: bold;
`

export const DescriptionText = styled.Text`
  font-family: 'Raleway-Regular';
  font-size: 14px;
  color: rgb(48,49,51);
`
