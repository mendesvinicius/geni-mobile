import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { CommingSoon } from '../../components'

import { HeaderRibbon } from '../../components'

import { Container } from './styles'

class CreateEstablishmentScreen extends Component {

  render() {
    return (
      <Container>
        <HeaderRibbon />

        <View style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f2f2f2'
        }} >
          <Text style={{ fontSize: 20, color: '#7FA01D', textAlign: 'center' }}>Quer registrar um novo estabelecimento?</Text>
          <Text style={{ fontSize: 10, color: '#555555', marginBottom: 10, marginTop: 10 }}>
            Você será levado a câmera para registar uma foto do local
          </Text>

          <TouchableOpacity
            style={{
              height: 40,
              borderRadius: 50,
              width: 200,
              backgroundColor: '#7FA01D',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => this.props.navigation.navigate('CameraScreen')}
          >
            <Text style={{ fontSize: 15, color: '#fff' }}>Sim</Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.user
  return {
    user
  }
};

export default connect(mapStateToProps)(CreateEstablishmentScreen)
