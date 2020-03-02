import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { HeaderRibbon } from '../../components'

import { Container } from './styles'

class ProfileScreen extends Component {
  render() {
    return (
      <>
        <HeaderRibbon />

        <View>
          <Text> ProfileScreen </Text>
        </View>
      </>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.user
  return {
    user
  }
};

export default connect(mapStateToProps)(ProfileScreen)
