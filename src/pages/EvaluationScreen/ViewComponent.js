import React from 'react';

import { ActivityIndicator } from 'react-native';

import {
  Container,
  TitleContainer,
  EstablishmentTitle,
  SendButton,
  SendButtonText
} from './styles';

import { CustomInput, CustomPicker } from '../../components'

const ViewComponent = ({
  establishment,
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
  changeField,
  saveEvaluation,
  loading
}) => {
  return (
    <Container>
      <TitleContainer>
        <EstablishmentTitle>{establishment.name}</EstablishmentTitle>
      </TitleContainer>

      <CustomInput
        label={'Título da avaliação'}
        value={title}
        fullWidth={true}
        onChangeText={text => changeField(text, 'title')}
        placeholder={'Dê um título para sua avaliação'}
      />
      
      <CustomInput
        label={'Descrição'}
        value={description}
        fullWidth={true}
        multiline={true}
        onChangeText={text => changeField(text, 'description')}
        placeholder={'Descreva como foi sua experiência'}
      />

      <CustomPicker
        label={'Nota da avaliação'}
        actualValue={classification}
        onValueChange={value => changeField(value, 'classification')}
        values={[
          { title: '0', value: 0 },
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
        ]}
      />

      <CustomInput
        label={'Prós'}
        value={pros}
        fullWidth={true}
        multiline={true}
        onChangeText={text => changeField(text, 'pros')}
        placeholder={'Quais as coisas você mais curtiu?'}
      />

      <CustomInput
        label={'Contras'}
        value={cons}
        fullWidth={true}
        multiline={true}
        onChangeText={text => changeField(text, 'cons')}
        placeholder={'Quais coisas você não curtiu?'}
      />

      <CustomPicker
        label={'Como você avalia o preço das coisas no local?'}
        actualValue={price}
        onValueChange={value => changeField(value, 'price')}
        values={[
          { title: 'Uma pechincha', value: 'Uma pechincha' },
          { title: 'Barato', value: 'Barato' },
          { title: 'Na média', value: 'Na média' },
          { title: 'Um pouco caro', value: 'Um pouco caro' },
          { title: 'Muito caro', value: 'Muito caro' },
        ]}
      />

      <CustomPicker
        label={'Como é a musica?'}
        actualValue={music}
        onValueChange={value => changeField(value, 'music')}
        values={[
          { title: 'Péssima', value: 'Péssima' },
          { title: 'Ruim', value: 'Ruim' },
          { title: 'Nada mal', value: 'Nada mal' },
          { title: 'Boa', value: 'Boa' },
          { title: 'Muito boa', value: 'Muito boa' },
        ]}
      />

      <CustomPicker
        label={'Como é o clima? você se sentiu bem?'}
        actualValue={climate}
        onValueChange={value => changeField(value, 'climate')}
        values={[
          { title: 'Nunca mais', value: 'Nunca mais' },
          { title: 'Ruim', value: 'Ruim' },
          { title: 'Agrádavel', value: 'Agrádavel' },
          { title: 'Bem agrádavel', value: 'Bem agrádavel' },
          { title: 'Melhor lugar da vida', value: 'Melhor lugar da vida' },
        ]}
      />

      <CustomPicker
        label={'Você se sentiu seguro?'}
        actualValue={security}
        onValueChange={value => changeField(value, 'security')}
        values={[
          { title: 'Nada seguro', value: 'Nada seguro' },
          { title: 'Pouco seguro', value: 'Pouco seguro' },
          { title: 'Seguro', value: 'Seguro' },
          { title: 'Bastante seguro', value: 'Bastante seguro' },
        ]}
      />

      <CustomPicker
        label={'Esta é uma boate LGBT?'}
        actualValue={only_for_lgbt}
        onValueChange={value => changeField(value, 'only_for_lgbt')}
        values={[
          { title: 'Sim', value: true },
          { title: 'Não', value: false },
        ]}
      />

      <CustomInput
        label={'Gostaria de relatar alguma forma de agressão?'}
        value={agressions}
        fullWidth={true}
        multiline={true}
        onChangeText={text => changeField(text, 'agressions')}
        placeholder={'Descreva alguma situação bem ruim que aconteceu com você'}
      />

      <SendButton
        onPress={() => saveEvaluation()}
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
