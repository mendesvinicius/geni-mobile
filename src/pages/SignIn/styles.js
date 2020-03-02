import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

export const ImageBackground = styled.ImageBackground `
  height: ${Dimensions.get('window').height};
  width: ${Dimensions.get('window').width};
`;

export const HeaderToGoBack = styled.View`
  height: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: ${Dimensions.get('window').width};
`

export const GoBackToAuthText = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 13px;
  color: #fff;
`

export const GoBackToAuthButton = styled.TouchableOpacity`
  width: 82px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`

export const ContainerForm = styled.View`
  width: 310px;
  height: 269px;
  padding: 37px 32px;
  align-self: center;
  background-color: #f2f2f2;
  margin: auto 0;
`

export const LoginTitle = styled.Text`
  align-self: center;
  font-family: 'Raleway-Medium';
  font-size: 16px;
  color: #918F8E;
`

export const ButtonView = styled.View`
  align-items: center;
  margin-top: 25px;
`
