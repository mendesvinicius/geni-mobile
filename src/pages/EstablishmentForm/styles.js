
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image'

export const Container = styled.ScrollView`
  background-color: #f2f2f2;
  padding: 20px;
`;

export const EstablishmentImageContainer = styled.View`
  margin-bottom: 15px;
  align-self: center;
  height: 219px;
  width: 100%;
`
export const EstablishmentImage = styled.Image`
  height: 219px;
  width: 100%;
`

export const SendButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  background-color: #7FA01D;
`

export const SendButtonText = styled.Text`
  font-family: 'Raleway-Medium';
  margin-left: 5px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`
