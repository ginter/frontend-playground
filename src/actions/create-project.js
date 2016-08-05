import { CREATE_PROJECT } from '../action-types'

const createProject = name => dispatch => dispatch({
  type: CREATE_PROJECT,
  payload: { uid: Math.random().toString(36).slice(2), name }
})

export default createProject
