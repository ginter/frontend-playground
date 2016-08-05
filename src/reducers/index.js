import { combineReducers } from 'redux'
import projects, * as fromProjects from './projects'
import searchQuery, * as fromSearchQuery from './search-query'

export default combineReducers({
  projects,
  searchQuery
})

export function getVisibleProjects(state) {
  const projects = fromProjects.all(state.projects);
  const searchQuery = fromSearchQuery.get(state.searchQuery);

  return projects.filter(project => project.name.indexOf(searchQuery) !== -1)
}
