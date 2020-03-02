import React from 'react';
import { Text, View } from 'react-native'

import { Container, SelectPicker, PickerLabel } from './styles'

const CustomPicker = ({
  actualValue,
  onValueChange,
  values,
  fullWidth,
  label
}) => {
  return (
    <Container>
      <PickerLabel>{label}</PickerLabel>
      <SelectPicker
        selectedValue={actualValue}
        onValueChange={value => onValueChange(value)}
        fullWidth={fullWidth}
      >
        {values.map(item => (
          <SelectPicker.Item label={item.title} value={item.value} />
        ))}
      </SelectPicker>
    </Container>
  );
};

CustomPicker.defaultProps = {
  actualValue: '',
  label: '',
  values: [],
  fullWidth: false,
}

export default CustomPicker;