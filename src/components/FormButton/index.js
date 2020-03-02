import React from 'react';
import { ActivityIndicator } from 'react-native'

import {
  ButtonContainer,
  ButtonText
} from './styles';

const FormButton = ({
  text,
  buttonAction,
  loading
}) => {
  return (
    <ButtonContainer
      onPress={() => buttonAction()}
    >
      {!loading
        ? <ButtonText>{text}</ButtonText>
        : <ActivityIndicator size="small" color="#fff" />
      }
    </ButtonContainer>
  )
};

export default FormButton;
