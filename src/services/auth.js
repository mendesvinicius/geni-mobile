import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation()

export const redirectOnUnauthorized = () => {
  const dispatch = useDispatch()
  dispatch({ type: 'auth/SET_SIGNOUT' })

  navigation.navigate('Auth')
}