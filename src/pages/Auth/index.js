import React, { Component } from 'react'
import { connect } from 'react-redux'

import ViewComponent from './ViewComponent'

class Auth extends Component {
  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    const { user, navigation } = this.props
    if(user) navigation.navigate('HomeScreen')
  }

  render() {
    const { navigation } = this.props
    return (
      <ViewComponent
        navigation={navigation}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(Auth)