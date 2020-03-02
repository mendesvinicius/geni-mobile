
import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const SelectPicker = styled.Picker`
  height: 40px;
  width: ${props => props.fullWidth ? '100%' : '243'};
  margin-bottom: 11px;
  background-color: #fff;
`

export const PickerLabel = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 13px;
  color: #918F8E;
  margin-bottom: 4px;
`
