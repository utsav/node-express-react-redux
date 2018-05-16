import { actionTypes as types } from '../constants'
import merge from 'lodash/merge'

const user = (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.SET_USER:
      let data = {...merge(state,action.data)};
      return data
    case types.UNSET_USER:
      return {}
    default:
      return state
  }
}

export default user
