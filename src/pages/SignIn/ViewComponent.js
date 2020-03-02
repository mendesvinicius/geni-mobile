import React from 'react';
import { CustomInput, FormButton } from '../../components'

import {
  ImageBackground,
  HeaderToGoBack,
  GoBackToAuthButton,
  GoBackToAuthText,
  ContainerForm,
  LoginTitle,
  ButtonView
} from './styles'

const SignIn = ({
  navigation,
  email,
  password,
  setEmail,
  setPassword,
  authentication,
  loading
}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/tira.png')}
    >
      <HeaderToGoBack>
        <GoBackToAuthButton onPress={() => navigation.navigate('Auth')} >
          <GoBackToAuthText>
            Voltar
          </GoBackToAuthText>
        </GoBackToAuthButton>
      </HeaderToGoBack>
      
      <ContainerForm>
        <LoginTitle>Login</LoginTitle>

        <CustomInput
          value={email}
          label={'Email'}
          onChangeText={text => setEmail(text)}
          placeholder={'Digite seu email'}
        />

        <CustomInput
          value={password}
          label={'Senha'}
          type={'password'}
          onChangeText={text => setPassword(text)}
          placeholder={'Digite sua senha'}
        />

        <ButtonView>
          <FormButton
            text={'Entrar'}
            buttonAction={authentication}
            loading={loading}
          />
        </ButtonView>
      </ContainerForm>
    </ImageBackground>
  )
};

export default SignIn;
