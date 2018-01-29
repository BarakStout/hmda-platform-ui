import React, { Component } from 'react'
import { connect } from 'react-redux'
import RefileWarning from './index.jsx'
import shouldComponentUpdate from '../utils/shouldComponentUpdate.js'
import fetchCSV from '../actions/fetchCSV.js'

class RefileWarningContainer extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }

  render() {
    return <RefileWarning {...this.props} />
  }
}

function mapStateToProps(state) {
  const { submission } = state.app

  return { submission }
}

function mapDispatchToProps(dispatch) {
  // triggered by a click on "Download edit report"
  const onDownloadClick = (institutionId, filing, submissionId) => {
    dispatch(fetchCSV(institutionId, filing, submissionId))
  }

  return { onDownloadClick }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RefileWarningContainer
)

export { RefileWarningContainer, mapDispatchToProps }
