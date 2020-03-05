import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import _ from 'lodash'

import api from '../../services/api'
import { ListLoading } from '../../components'

import { 
  Container,
  StarsContainer,
  EvaluationsFlatList,
  EvaluationItem,
  EvaluationInfoContainer,
  EvaluationUserName,
  EvaluationTitle,
  DescriptionTitle,
  EvaluationText,
  EvaluationDescriptionContainer,
  EvaluationMoreInfo } from './styles';

const EvaluationsList = ({
  establishment,
  user,
  navigation
}) => {
  const [evaluations, setEvaluations] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadEvaluations()
  }, [])

  const loadEvaluations = async () => {
    try {
      setLoading(true)
      
      const { data } = await api.get(`/evaluations/establishments/${establishment.id}`, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      })

      const orderedEvaluations = _.orderBy(data, 'created_at', 'desc')

      setEvaluations(orderedEvaluations)
      setLoading(false)
    } catch (error) {
      console.log({error})
      setLoading(false)
    }
  }

  return (
    <Container>
      {loading && <ListLoading />}

      <NavigationEvents
        onWillFocus={() => {
          loadEvaluations()
        }}
      />

      <EvaluationsFlatList
          data={evaluations}
          keyExtractor={item => item.id}
          // onEndReached={() => getMoreEvaluations()}
          // onEndReachedThreshold={0.5}
          renderItem={({item, index}) => {
            return (
              <EvaluationItem
                key={index}
              >
                <EvaluationInfoContainer>
                    <EvaluationTitle>
                      {`"${item.title}"`}
                    </EvaluationTitle>

                    <EvaluationUserName>
                      {item.user_name}
                    </EvaluationUserName>

                    <StarsContainer>
                      {item.classification != 'Sem avaliações' && Array(item.classification).fill(<Icon size={20} name="star" color={'#7FA01D'} />)}
                    </StarsContainer>

                  <EvaluationDescriptionContainer>
                    <DescriptionTitle>Descrição</DescriptionTitle>
                    <EvaluationText>{item.description}</EvaluationText>
                    
                    <DescriptionTitle>Prós</DescriptionTitle>
                    <EvaluationText>{item.pros}</EvaluationText>

                    <DescriptionTitle>Contras</DescriptionTitle>
                    <EvaluationText>{item.cons}</EvaluationText>
                  </EvaluationDescriptionContainer>

                  <View style={{ 
                    width: '100%',
                    height: 1,
                    marginBottom: 10,
                    backgroundColor: '#918F8E'
                  }} />

                  <EvaluationMoreInfo>
                    <DescriptionTitle moreInfo={true}>LGBT</DescriptionTitle>
                    <EvaluationText>{item.only_for_lgbt ? 'Sim' : 'Não'}</EvaluationText>
                  </EvaluationMoreInfo>

                  <EvaluationMoreInfo>
                    <DescriptionTitle moreInfo={true}>Segurança</DescriptionTitle>
                    <EvaluationText>{item.security}</EvaluationText>
                  </EvaluationMoreInfo>
                  
                  <EvaluationMoreInfo>
                    <DescriptionTitle moreInfo={true}>Preço</DescriptionTitle>
                    <EvaluationText>{item.price}</EvaluationText>
                  </EvaluationMoreInfo>

                  <EvaluationMoreInfo>
                    <DescriptionTitle moreInfo={true}>Clima</DescriptionTitle>
                    <EvaluationText>{item.climate}</EvaluationText>
                  </EvaluationMoreInfo>



                </EvaluationInfoContainer>
              </EvaluationItem>
            )
          }}
        />
    </Container>
  );
};

export default EvaluationsList;