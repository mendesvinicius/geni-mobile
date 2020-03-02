import React, { Component } from 'react'
import { connect } from 'react-redux'

import ComerCategory from '../../assets/icons/comer.png'
import AssistirCategory from '../../assets/icons/Assistir.png'
import InspirarCategory from '../../assets/icons/Cultura.png'
import DançarCategory from '../../assets/icons/Dançar.png'

import ViewComponent from './ViewComponent'

import { Creators as authActions } from '../../store/reducers/auth/auth'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        ComerCategory,
        AssistirCategory,
        InspirarCategory,
        DançarCategory
      ],
      categories: [
        { category: 'Comer' },
        { category: 'Assistir' },
        { category: 'Inspirar' },
        { category: 'Dançar' }
      ]
    }
  }

  navigateToCategory = (category) => {
    this.props.navigation.navigate('CategoryScreen', {
      category: category
    })
  }

  render() {
    const { categories, images } = this.state
    
    return (
      <ViewComponent
        categories={categories}
        images={images}
        navigateToCategory={this.navigateToCategory}
      />
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.user
  return {
    user
  }
};

export default connect(mapStateToProps, {...authActions})(HomeScreen)
