import { SEARCH } from '../action-types'

const searchQuery = (state = '', action) => {
  switch(action.type) {
    case SEARCH:
      return action.payload
    default:
      return state
  }
}

export default searchQuery

export const get = state => state
