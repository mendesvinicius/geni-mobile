import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api'
import { Creators } from './auth'

function* signInAndGetUser(action) {
  yield put(Creators.setAuthLoading(true))
  const { email, password } = action.payload

  try {
    const { data } = yield call(api.post, '/sessions', {email, password} );
    
    const user ={
      ...data[0],
      token: data.token
    }
    
    yield put(Creators.setSigned(user))
    
  } catch (error) {
    yield put(Creators.setAuthError({error}))
  }
  
  yield put(Creators.setAuthLoading(false))
}

export default all([
  takeLatest('auth/SIGN_IN_REQUEST', signInAndGetUser)
])