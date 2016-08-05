import { DELETE_PROJECT } from '../action-types'

const projects = (state = [], action) => {
  switch(action.type) {
    case DELETE_PROJECT:
      return state.filter(project => project.uid !== action.payload)
    default:
      return state
  }
}

export default projects

export const all = state => state
