import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import api from '../../services/api'
import _ from 'lodash'

import { Creators as establishmentsActions } from '../../store/reducers/establishments'
import ViewComponent from './ViewComponent'

import { HeaderRibbon } from '../../components'

import { BackButton, PageTitle } from './styles'

class CategoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      establishments: [],
      loading: false,
      page: 1,
      lastPage: true,
      onRefresh: false,
    }
  }

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('category')
    return {
      headerLeft: () => (
        <BackButton
          onPress={() => navigation.goBack(null)}
        >
          <Icon name='ios-arrow-back' size={20} />
        </BackButton>
      ),
      headerRight: () => (
        <PageTitle>{title}</PageTitle>
      ),
    }
  }

  componentDidMount() {
    this.loadEstablishments(1)
  }

  loadEstablishments = async (page, isGetMore) => {
    // this.props.resetEstablishments()
    const { user } = this.props
    const category = this.props.navigation.getParam('category')
    if(!isGetMore) this.setState({ loading: true })

    try {
      const { data } = await api.get(`establishments?page=${page}&category=${category}`, {
        page,
        category,
        headers: { 'Authorization': `Bearer ${user.token}` }
      })

      if(data.data.length == 0) this.setState({ lastPage: true })
      
      this.classificateEstablishments(data.data)
      this.props.setEstablishments(data.data)

      this.setState({ loading: false })

    } catch (error) {
      console.log({error})
      this.setState({ loading: false })
    }
  }

  getMoreEstablishments = () => {
    const { page, lastPage } = this.state
    this.setState(prevState => ({
      page: prevState.page + 1
    }),
    () => {
      if(!lastPage) return this.loadEstablishments(page, true)
    }
    )
  }

  classificateEstablishments = (establishments) => {
    if(!establishments.length) return

    const ratings = establishments.map(establishment => {
      establishment.ratings = establishment.evaluations.map((evaluation) => evaluation.classification)
      
      const count = establishment.ratings.length

      if(count > 0) {
        let result = establishment.ratings.reduce((previous, current) => current += previous)

        establishment.ratings = Math.floor(result /= count)
      } else {
        establishment.ratings = 'Sem avaliações'
      }

      return establishment
    })
  }

  navigateToEstablishment = (item) => {
    this.props.navigation.navigate('EstablishmentDetails', {
      establishment: item
    })
  }

  clearPages = () => {
    this.setState({ page: 1, lastPage: false })
  }

  refreshCategory = () => {
    this.clearPages()
    this.setState({ onRefresh: true })
    this.loadEstablishments(1 , false)
    this.setState({ onRefresh: false })
  }

  filterCategory = (establishments) => {
    const category = this.props.navigation.getParam('category')

    let filtered = establishments.filter(establishment => establishment.category == category)

    return filtered
  }

  render() {
    const { loading, onRefresh } = this.state
    const { establishments } = this.props
    
    const filteredEstablishments = this.filterCategory(establishments)
    return (
      <>
        <HeaderRibbon />

        <ViewComponent
          establishments={filteredEstablishments}
          loading={loading}
          navigateToEstablishment={this.navigateToEstablishment}
          getMoreEstablishments={this.getMoreEstablishments}
          refreshCategory={this.refreshCategory}
          onRefresh={onRefresh}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.user
  return {
    user,
    establishments: _.values(state.establishments.establishments)
  }
};

export default connect(mapStateToProps, {...establishmentsActions})(CategoryScreen)
