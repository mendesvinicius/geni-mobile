import React from 'react';

import { View } from 'react-native';

import {
  InputContainer,
  InputLabel,
  InputForm,
  InputError
} from './styles';

const CustomInput = ({
  value,
  label,
  onChangeText,
  multiline,
  keyboardType,
  editable,
  onFocus,
  placeholder,
  error,
  type,
  fullWidth
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputForm
        textAlignVertical={'top'} 
        fullWidth={fullWidth}
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        multiline={multiline}
        keyboardType={keyboardType}
        editable={editable}
        error={error}
        secureTextEntry={type == 'password' ? true : false}
      />
      {error && <InputError>{errorText}</InputError>}
    </InputContainer>
  )
};

CustomInput.defaultProps = {
  fullWidth: false,
  value: '',
  placeholder: '',
  multiline: false,
  keyboardType: 'default',
  editable: true,
  error: false,
}

export default CustomInput;
