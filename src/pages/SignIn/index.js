import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators as authActions } from '../../store/reducers/auth/auth'

import ViewComponent from './ViewComponent'


class SignIn extends Component {
  constructor(props) {
    super(props),
    this.state = {
      email: '',
      password: ''
    };
  }

  setEmail = (email) => {
    this.setState({ email })
  }

  setPassword = (password) => {
    this.setState({ password })
  }

  authentication = async () => {
    const { email, password } = this.state
    const { authError, navigation, user } = this.props
    this.props.sigInRequest(email, password)
    console.log(user)
    if(user) navigation.navigate('HomeScreen')
  }

  render() {
    const { email, password } = this.state
    const { navigation, user, loading, authError } = this.props
    return (
      <ViewComponent
        navigation={navigation}
        email={email}
        password={password}
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        authentication={this.authentication}
        loading={loading}
        authError={authError}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    authError: state.auth.authError
  }
};

export default connect(mapStateToProps, {...authActions})(SignIn)
