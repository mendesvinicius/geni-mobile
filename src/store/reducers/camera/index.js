export const Types = {
  SET_IMAGE: 'camera/SET_IMAGE',
  RESET_IMAGE: 'camera/RESET_IMAGE',
}

export const Creators = {
    setImage: (payload) => ({
      type: Types.SET_IMAGE,
      payload
    }),
    resetImage: () => ({
      type: Types.RESET_IMAGE
    }),
}

const INITIAL_STATE = {
  image: '',
}

export default function camera(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_IMAGE:

      return {
        ...state,
        image: action.payload
      }

    case Types.RESET_IMAGE:
      return INITIAL_STATE

    default:
      return state
  }
}