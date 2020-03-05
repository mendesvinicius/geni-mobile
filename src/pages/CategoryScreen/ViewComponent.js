import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FastImage from 'react-native-fast-image'

import { ListLoading, EmptyList } from '../../components'

import { 
  Container,
  EstablishmentsList,
  EstablishmentItem,
  EstablishmentImage,
  EstablishmentInfoContainer,
  EstablishmentTitleContainer,
  EstablishmentTitle,
  EstablishmentCategoryContainer,
  EstablishmentText,
  EstablishmentAdressContainer } from './styles';

const ViewComponent = ({
  establishments,
  loading,
  navigateToEstablishment,
  getMoreEstablishments,
  onRefresh,
  refreshCategory
}) => {

  return (
    <>
      <Container>
        {!establishments || !establishments.length && <EmptyList />}
        <EstablishmentsList
          data={establishments}
          keyExtractor={item => item.id}
          onRefresh={() => refreshCategory()}
          refreshing={onRefresh}
          onEndReached={() => getMoreEstablishments()}
          onEndReachedThreshold={0.5}
          renderItem={({item, index}) => {
            // const image = item.images[0].path
            console.log(item)
            return (
              <EstablishmentItem
                key={index}
                onPress={() => navigateToEstablishment(item)}
              >
                {item.images.length ? (
                  <EstablishmentImage
                    source={{
                      uri: item.images[0].path,
                      cache: FastImage.cacheControl.immutable
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                ) : null}

                <EstablishmentInfoContainer>
                  <EstablishmentTitleContainer>
                    <EstablishmentTitle>
                      {item.name}
                    </EstablishmentTitle>

                    <EstablishmentCategoryContainer>
                      <EstablishmentText>
                        {item.category}
                      </EstablishmentText>

                      {item.ratings != 'Sem avaliações' && Array(item.ratings).fill(<Icon size={10} name="star" color={'#DAA520'} />)}
                    </EstablishmentCategoryContainer>
                  </EstablishmentTitleContainer>

                  <EstablishmentAdressContainer>
                    <EstablishmentText adress={true}>{item.country}</EstablishmentText>

                    <EstablishmentText adress={true}>{item.city}</EstablishmentText>
                  </EstablishmentAdressContainer>
                </EstablishmentInfoContainer>
              </EstablishmentItem>
            )
          }}
        />
      </Container>

      {loading && <ListLoading />}
    </>
  )
};

export default ViewComponent;
