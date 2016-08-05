import { getVisibleProjects } from "./reducer";
import ProjectList from "./project-list"

function mapStateToProps(state) {
  return {
    projects: getVisibleProjects(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
