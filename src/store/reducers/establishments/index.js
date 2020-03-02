import produce from 'immer';
import _ from 'lodash'

export const Types = {
  SET_ESTABLISHMENTS: 'establishments/SET_ESTABLISHMENTS',
  RESET_ESTABLISHMENTS: 'establishments/RESET_ESTABLISHMENTS',
}

export const Creators = {
    setEstablishments: (payload) => ({
      type: Types.SET_ESTABLISHMENTS,
      payload
    }),
    resetEstablishments: () => ({
      type: Types.RESET_ESTABLISHMENTS
    }),
}

const INITIAL_STATE = {
  establishments: {},
}

export default function establishments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ESTABLISHMENTS:
      
      const newEstablishments = _.mapKeys(action.payload, 'id')

      return {
        ...state,
        establishments: {...state.establishments, ...newEstablishments}
      }

    case Types.RESET_ESTABLISHMENTS:
      return INITIAL_STATE

    default:
      return state
  }
}