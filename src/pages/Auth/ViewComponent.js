import React from 'react';

import {
  Container,
  HeaderToLogin,
  TitleToLogin,
  GoToLoginButton,
  GoToLoginText,
  RegisterContainer,
  LogoImage,
  GoToRegisterButton,
  GoToRegisterText,
  FooterContainer,
  HandsImage
} from './styles';

const Auth = ({
  navigation
}) => {
  return (
    <Container>
      <HeaderToLogin>
        <TitleToLogin>Já possui uma conta?</TitleToLogin>
        <GoToLoginButton>
          <GoToLoginText
            onPress={() => navigation.navigate('SignIn')}
            >
            ENTRAR
          </GoToLoginText>
        </GoToLoginButton>
      </HeaderToLogin>
      <RegisterContainer>
        <LogoImage
          source={require('../../assets/images/logo.png')}
        />
        <GoToRegisterButton
          onPress={() => navigation.navigate('SignUp')}
        >
          <GoToRegisterText>
            Cadastre-se com seu email
            </GoToRegisterText>
        </GoToRegisterButton>
      </RegisterContainer>
      <FooterContainer>
        <HandsImage
          source={require('../../assets/images/hands.png')}
        />
      </FooterContainer>
    </Container>
  )
};

export default Auth;
