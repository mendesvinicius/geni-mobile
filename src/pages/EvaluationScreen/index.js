import React, { Component } from 'react'
import { connect } from 'react-redux'

import api from '../../services/api'
import { HeaderRibbon } from '../../components'
import ViewComponent from './ViewComponent'

class EvaluationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      classification: 0,
      pros: '',
      cons: '',
      climate: '',
      music: '',
      price: '',
      only_for_lgbt: '',
      security: '',
      agressions: '',
      loading: false
    }
  }

  changeField = (value, field) => {
    switch (field) {
      case 'title':
        this.setState({ title: value })
        break;
    
      case 'description':
        this.setState({ description: value })
        break;
    
      case 'classification':
        this.setState({ classification: value })
        break;
    
      case 'pros':
        this.setState({ pros: value })
        break;
    
      case 'cons':
        this.setState({ cons: value })
        break;
    
      case 'climate':
        this.setState({ climate: value })
        break;
    
      case 'music':
        this.setState({ music: value })
        break;
    
      case 'price':
        this.setState({ price: value })
        break;
    
      case 'only_for_lgbt':
        this.setState({ only_for_lgbt: value })
        break;
    
      case 'security':
        this.setState({ security: value })
        break;
    
      default:
        this.setState({ agressions: value })
        break;
    }
  }

  saveEvaluation = async () => {
    const { 
      title,
      description,
      classification,
      pros,
      cons,
      climate,
      music,
      price,
      only_for_lgbt,
      security,
      agressions,
    } = this.state
    const { user } = this.props
    const establishment = this.props.navigation.getParam('establishment')

    const formData = {
      title,
      description,
      classification,
      pros,
      cons,
      climate,
      music,
      price,
      only_for_lgbt,
      security,
      agressions,
    }
    
    this.setState({ loading: true })
    api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
    try {
      await api.post(`/evaluations/${establishment.id}`, {
        // headers: { 'Authorization': `Bearer ${user.token}` },
        ...formData,
      })

      this.setState({ loading: false })
      
      this.props.navigation.navigate('EstablishmentDetails', {
        establishment
      })
      
    } catch (error) {
      console.log({error})
      this.setState({ loading: false })
    }
  }

  render() {
    const { 
      title,
      description,
      classification,
      pros,
      cons,
      climate,
      music,
      price,
      only_for_lgbt,
      security,
      agressions,
      loading
    } = this.state

    const establishment = this.props.navigation.getParam('establishment')
    return (
      <>
        <HeaderRibbon />

        <ViewComponent
          establishment={establishment}
          title={title}
          description={description}
          classification={classification}
          pros={pros}
          cons={cons}
          climate={climate}
          music={music}
          price={price}
          only_for_lgbt={only_for_lgbt}
          security={security}
          agressions={agressions}
          changeField={this.changeField}
          saveEvaluation={this.saveEvaluation}
          loading={loading}
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

export default connect(mapStateToProps)(EvaluationScreen)
