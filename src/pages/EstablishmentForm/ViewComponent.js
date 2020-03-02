import React from 'react';

import { ActivityIndicator } from 'react-native';

import {
  Container,
  EstablishmentImageContainer,
  EstablishmentImage,
  SendButton,
  SendButtonText
} from './styles';

import { CustomInput, CustomPicker } from '../../components'

const ViewComponent = ({
  name,
  description,
  adress,
  city,
  state,
  facebook,
  twitter,
  instagram,
  telephone,
  website,
  category,
  estados,
  image,
  loading,
  changeField,
  saveEstablishment
}) => {
  return (
    <Container>
    <EstablishmentImageContainer>
      <EstablishmentImage
        source={{ uri: image.uri }}
      />
    </EstablishmentImageContainer>

      <CustomInput
        label={'Nome do local'}
        value={name}
        fullWidth={true}
        onChangeText={text => changeField(text, 'name')}
        placeholder={'Digite o nome do local'}
      />
      
      <CustomInput
        label={'Descrição'}
        value={description}
        fullWidth={true}
        multiline={true}
        onChangeText={text => changeField(text, 'description')}
        placeholder={'Descreva o local'}
      />
      
      <CustomInput
        label={'Endereço'}
        value={adress}
        fullWidth={true}
        multiline={true}
        onChangeText={text => changeField(text, 'adress')}
        placeholder={'Digite o endereço do local'}
      />
      
      <CustomInput
        label={'Cidade'}
        value={city}
        fullWidth={true}
        onChangeText={text => changeField(text, 'city')}
        placeholder={'Digite a cidade onde se encontra este local'}
      />

      <CustomPicker
        label={'Estado'}
        actualValue={state}
        onValueChange={value => changeField(value, 'state')}
        values={estados}
      />

      <CustomPicker
        label={'Categoria'}
        actualValue={category}
        onValueChange={value => changeField(value, 'category')}
        values={[
          { title: 'Dançar', value: 'Dançar' },
          { title: 'Assistir', value: 'Assistir' },
          { title: 'Para se inspirar', value: 'Inspirar' },
          { title: 'Comer e beber', value: 'Comer' }
        ]}
      />

      <CustomInput
        label={'Telefone'}
        value={telephone}
        fullWidth={true}
        onChangeText={text => changeField(text, 'telephone')}
        placeholder={'Digite o número de telefone do local'}
        keyboardType={'number-pad'}
      />

      <CustomInput
        label={'Site'}
        value={website}
        fullWidth={true}
        onChangeText={text => changeField(text, 'website')}
        placeholder={'Digite o site do local'}
      />

      <CustomInput
        label={'Facebook'}
        value={facebook}
        fullWidth={true}
        onChangeText={text => changeField(text, 'facebook')}
        placeholder={'Digite o link para o facebook'}
      />

      <CustomInput
        label={'Instagram'}
        value={instagram}
        fullWidth={true}
        onChangeText={text => changeField(text, 'instagram')}
        placeholder={'Digite o instagram do local'}
      />

      <CustomInput
        label={'Twitter'}
        value={twitter}
        fullWidth={true}
        onChangeText={text => changeField(text, 'twitter')}
        placeholder={'Digite o link para o twitter'}
      />

      <SendButton
        onPress={() => saveEstablishment()}
      >
        {!loading
          ? <SendButtonText>Enviar</SendButtonText>
          : <ActivityIndicator size="small" color="#fff" />
        }
      </SendButton>
    </Container>
  )
};

export default ViewComponent;
