import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { RNCamera } from 'react-native-camera';

import { Creators as CameraActions } from '../../store/reducers/camera'

import { Container, CameraButtonContainer } from './styles'

class CameraScreen extends Component {
  takePicture = async () => {
    if (this.camera) {
      try {
        const options = { quality: 0.5, base64: true, skipProcessing: true };
        const data = await this.camera.takePictureAsync(options);
        this.props.setImage(data)
        this.props.navigation.navigate('EstablishmentForm')
      } catch (error) {
        Alert.alert("Erro", "Houve um erro ao tirar a foto.");
      }
    }
  }

  render() {
    return (
      <Container>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos da sua permissão para utilizar a câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
        />
        <CameraButtonContainer
          onPress={this.takePicture}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const mapStateToProps = state => {
  const user = state.auth.user
  return {
    user
  }
}

export default connect(mapStateToProps,{ ...CameraActions })(CameraScreen)
