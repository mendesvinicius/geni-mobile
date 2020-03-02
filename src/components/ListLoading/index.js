import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native'

import { Container } from './styles'

const ListLoading = props => {
  return (
    <Container>
      <ActivityIndicator size={80} color="#FA6916"/>
      <Text style={{ color: '#FA6916', fontSize: 14 }} >Carregando...</Text>
    </Container>
  );
};

export default ListLoading;