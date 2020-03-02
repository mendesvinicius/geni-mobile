import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'

import { HeaderRibbon } from '../../components'

import ViewComponent from './ViewComponent'

class EstablishmentDetails extends Component {

  makeEvaluation = (establishment) => {
    this.props.navigation.navigate('EvaluationScreen', {
      establishment: establishment,
    })
  }

  render() {
    const { navigation } = this.props
    const establishment = navigation.getParam('establishment')
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <ViewComponent
          establishment={establishment}
          makeEvaluation={this.makeEvaluation}
          user={this.props.user}
          navigation={navigation}
        />
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

export default connect(mapStateToProps)(EstablishmentDetails)
