import { DELETE_PROJECT } from '../action-types'

const deleteProject = uid => dispatch => dispatch({
  type: DELETE_PROJECT, payload: { uid }
})

export default deleteProject
