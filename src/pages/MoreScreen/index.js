import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import api from '../../services/api'
import { CommingSoon } from '../../components'
import { Creators as authActions } from '../../store/reducers/auth/auth'

import { HeaderRibbon } from '../../components'

import { Container } from './styles'

class MoreScreen extends Component {

  signOut = async () => {
    try {
      await api.delete('sessions')

      this.props.setSignOut()

      this.props.navigation.navigate('Auth')
    } catch (error) {
      
    }
  }

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
          <Text style={{ fontSize: 20, color: '#7FA01D', textAlign: 'center' }}>Quer se deslogar?</Text>
         
          <TouchableOpacity
            style={{
              height: 40,
              borderRadius: 50,
              width: 200,
              backgroundColor: '#7FA01D',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => this.signOut()}
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

export default connect(mapStateToProps, {...authActions})(MoreScreen)
