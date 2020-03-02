import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { CommingSoon } from '../../components'

import { HeaderRibbon } from '../../components'

import { Container } from './styles'

class CreateEvaluationFlowScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderRibbon />

        <CommingSoon />
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

export default connect(mapStateToProps)(CreateEvaluationFlowScreen)
