import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

export const Container = styled.View`
  background-color: #262c3a;
  height: 100%;
`;

export const HeaderToLogin = styled.View`
  height: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: ${Dimensions.get('window').width};
`

export const TitleToLogin = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 13px;
  color: #fff;
`

export const GoToLoginButton = styled.TouchableOpacity`
  width: 82px;
  height: 22px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #7fa01d;
  margin-left: 10px;
  margin-right: 10px;
`

export const GoToLoginText = styled.Text`
  font-family: 'Raleway-Bold';
  font-size: 12px;
  color: #fff;
`

export const RegisterContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LogoImage = styled.Image`

`

export const GoToRegisterButton = styled.TouchableHighlight`
  width: 200px;
  height: 40px;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
`

export const GoToRegisterText = styled.Text`
  font-family: 'Raleway-SemiBold';
  font-size: 14px;
  color: #fff;
`

export const FooterContainer = styled.View`
  height: 184px;
`

export const HandsImage = styled.Image`

`