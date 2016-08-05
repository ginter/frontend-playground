import { CREATE_PROJECT, DELETE_PROJECT } from '../action-types'

const projects = (state = [], action) => {
  switch(action.type) {
    case CREATE_PROJECT:
      return [...state, action.payload]
    case DELETE_PROJECT:
      return state.filter(project => project.uid !== action.payload.uid)
    default:
      return state
  }
}

export default projects

export const all = state => state
