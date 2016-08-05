import React from 'react'
import { connect } from 'react-redux'
import { getVisibleProjects } from '../reducers'
import { deleteProject } from '../actions'
import ProjectList from '../components/ProjectList'

const mapStateToProps = state => ({
    projects: getVisibleProjects(state)
})

export default connect(mapStateToProps, { deleteProject })(ProjectList)
