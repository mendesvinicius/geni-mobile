import React, { useState } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FastImage from 'react-native-fast-image'
import { TabView, SceneMap } from 'react-native-tab-view';

import { EvaluationsList } from '../../components'

import {
  TabBar,
  Tab,
  TabText,
  Container,
  Banner,
  QuickInfoContainer,
  EstablishmentTitle,
  RatingContainer,
  RatingCount,
  ContainerEstablishment,
  ContainerDescription,
  DescriptionTitle,
  DescriptionText,
  MakeEvaluationButton,
  MakeEvaluationText } from './styles';

const renderScene = (route, establishment, user, navigation) => {
  switch (route.key) {
    case 'first':
      return (
        <ContainerEstablishment>
          <ContainerDescription>
            <DescriptionTitle>Sobre {establishment.name}</DescriptionTitle>
            <DescriptionText>{establishment.description}</DescriptionText>
          </ContainerDescription>

          <ContainerDescription>
            <DescriptionTitle>Endereço</DescriptionTitle>
            <DescriptionText>{establishment.country}</DescriptionText>
            <DescriptionText>Cidade: {establishment.city}</DescriptionText>
            <DescriptionText>Estado: {establishment.state}</DescriptionText>
          </ContainerDescription>

          <ContainerDescription>
            <DescriptionTitle>Telefone</DescriptionTitle>
            <DescriptionText>{establishment.telephone}</DescriptionText>
          </ContainerDescription>
          </ContainerEstablishment>
      )
    case 'second':
      return (
        <ContainerEstablishment>
          <ContainerDescription>
            <DescriptionTitle>Categoria</DescriptionTitle>
            <DescriptionText>{establishment.category}</DescriptionText>
          </ContainerDescription>

          <ContainerDescription>
            <DescriptionTitle>Site</DescriptionTitle>
            <DescriptionText>{establishment.website}</DescriptionText>
          </ContainerDescription>

          <ContainerDescription>
            <DescriptionTitle>Facebook</DescriptionTitle>
            <DescriptionText>{establishment.facebook}</DescriptionText>
          </ContainerDescription>

          <ContainerDescription>
            <DescriptionTitle>Twitter</DescriptionTitle>
            <DescriptionText>{establishment.twitter}</DescriptionText>
          </ContainerDescription>

          <ContainerDescription>
            <DescriptionTitle>Instagram</DescriptionTitle>
            <DescriptionText>{establishment.instagram}</DescriptionText>
          </ContainerDescription>
        </ContainerEstablishment>
      )
    default:
      return <EvaluationsList establishment={establishment} user={user} navigation={navigation} />
  }
}

const renderTabBar = (props) => {
  const currentTabIndex = props.navigationState.index
  return (
    <TabBar 
      contentContainerStyle={styles.tabBarContentContainerStyle}
      horizontal={true} 
      showsHorizontalScrollIndicator={false}>
      {props.navigationState.routes.map((route, i) => {
        const isFocused = currentTabIndex == i
        return (
          <Tab
            key={i.toString()}
            isFocused={isFocused}
            onPress={() => props.setIndex(i) }>
            <TabText isFocused={isFocused} children={route.title}/>
          </Tab>
        )
      })}
    </TabBar>
  )
}

const initialLayout = { width: Dimensions.get('window').width }

const ViewComponent = ({
  establishment,
  makeEvaluation,
  user,
  navigation
}) => {
  
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'Estabelecimento' },
    { key: 'second', title: 'Mais Informações' },
    { key: 'third', title: 'Avaliações' },
  ])
  return (
    <Container>
      <Banner
        source={{
          uri: establishment.images[0].path,
          cache: FastImage.cacheControl.immutable
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <QuickInfoContainer>
        <EstablishmentTitle>{establishment.name}</EstablishmentTitle>

        <RatingContainer>
          {establishment.ratings == 'Sem avaliações'
            && <RatingCount>{establishment.ratings}</RatingCount>
          }
          {establishment.ratings != 'Sem avaliações'
           && Array(establishment.ratings).fill(<Icon size={30} name="star" color={'#DAA520'} />)}
        </RatingContainer>

        <MakeEvaluationButton
          onPress={() => makeEvaluation(establishment)}
        >
          <Icon size={20} name="account-star" color={'#fff'} />
          <MakeEvaluationText>Fazer Avaliação</MakeEvaluationText>
        </MakeEvaluationButton>
      </QuickInfoContainer>

      <TabView
        navigationState={{ index, routes }}
        renderScene={({route}) => renderScene(route, establishment, user, navigation)}
        renderTabBar={(props) => {
          return renderTabBar({...props, setIndex})
        }}
        indicatorStyle={{ backgroundColor: 'green' }}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBarContentContainerStyle : {
    paddingRight: 103
  },
})

export default ViewComponent;
