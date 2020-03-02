import styled from 'styled-components/native';

export const InputContainer = styled.View`

`;

export const InputLabel = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 13px;
  color: #918F8E;
  margin-bottom: 4px;
`

export const InputForm = styled.TextInput`
  height: ${props => props.multiline ? 80 : 40};
  width: ${props => props.fullWidth ? '100%' : '243'};
  padding: 8px;
  margin-bottom: 11px;
  background-color: #fff;
  font-size: 14px;
`

export const InputError = styled.Text`
  font-family: 'Raleway-Regular';
  font-size: 9px;
  color: #E20816;
  margin-bottom: 4px;
`