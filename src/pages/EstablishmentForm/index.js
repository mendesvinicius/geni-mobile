import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import api from '../../services/api'

import { HeaderRibbon } from '../../components'

import estados from './estados.json'
import ViewComponent from './ViewComponent'

class EstablishmentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      adress: '',
      city: '',
      state: '',
      country: '',
      facebook: '',
      twitter: '',
      instagram: '',
      telephone: '',
      website: '',
      category: '',
      loading: false
    }
  }

  changeField = (value, field) => {
    switch (field) {
      case 'name':
        this.setState({ name: value })
        break;
    
      case 'description':
        this.setState({ description: value })
        break;
    
      case 'adress':
        this.setState({ adress: value })
        break;
    
      case 'city':
        this.setState({ city: value })
        break;
    
    
      case 'state':
        this.setState({ state: value })
        break;
    
      case 'facebook':
        this.setState({ facebook: value })
        break;
    
      case 'twitter':
        this.setState({ twitter: value })
        break;
    
      case 'instagram':
        this.setState({ instagram: value })
        break;
    
      case 'telephone':
        this.setState({ telephone: value })
        break;
    
      case 'website':
        this.setState({ website: value })
        break;

      default:
        this.setState({ category: value })
        break;
    }
  }

  saveEstablishment = async () => {
    const { 
      name,
      description,
      adress,
      city,
      state,
      // country,
      facebook,
      twitter,
      instagram,
      telephone,
      website,
      category,
    } = this.state
    const { user } = this.props

    const formData = {
      name,
      description,
      adress,
      city,
      state,
      country: 'Brasil',
      facebook,
      twitter,
      instagram,
      telephone,
      website,
      category,
    }
    this.setState({ loading: true })
    api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`

    try {
      const { data } = await api.post('/establishments', {
        ...formData,
      })
      console.log('data', data)

      this.uploadImage(data.id)
      
    } catch (error) {
      console.log({error})
      this.setState({ loading: false })
    }
  }

  uploadImage = async (id) => {
    console.log('ENVIANDO IMAGEM')
    const { image } = this.props
    let headers = {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    }
    
    const { user } = this.props

    api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    api.defaults.headers.common['Content-Type'] = 'multipart/form-data'
    api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
    
    try {
      const { data } = await api.post(`establishments/${id}/images`,{
        headers,
        image: image.uri,
      })
      
      this.setState({ loading: false })
      this.props.navigation.navigate('HomeScreen')
    } catch (error) {
      console.log({error})
      this.setState({ loading: false })
    }
  }

  render() {
    const { 
      name,
      description,
      adress,
      city,
      state={state},
      country,
      facebook,
      twitter,
      instagram,
      telephone,
      website,
      category,
      loading
    } = this.state
    const { image } = this.props
    console.log(this.props.user)

    return (
      <>
        <ViewComponent
          name={name}
          description={description}
          adress={adress}
          city={city}
          state={state}
          // country={country}
          facebook={facebook}
          twitter={twitter}
          instagram={instagram}
          telephone={telephone}
          website={website}
          category={category}
          loading={loading}
          image={image}
          estados={estados}
          changeField={this.changeField}
          saveEstablishment={this.saveEstablishment}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.user
  return {
    user,
    image: state.camera.image
  }
};

export default connect(mapStateToProps)(EstablishmentForm)
