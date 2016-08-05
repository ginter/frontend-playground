import React from 'react'
import { connect } from 'react-redux'
import { createProject as onSubmit } from '../actions'
import ProjectForm from '../components/ProjectForm'

export default connect(state => ({}), { onSubmit })(ProjectForm)
