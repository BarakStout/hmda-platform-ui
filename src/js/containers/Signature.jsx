import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchSignature from '../actions/fetchSignature.js'
import updateSignature from '../actions/updateSignature.js'
import checkSignature from '../actions/checkSignature.js'
import Signature from '../components/Signature.jsx'

export class SignatureContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchSignature())
  }

  render() {
    return <Signature {...this.props} />
  }
}

export function mapStateToProps(state) {
  console.log('SignatureContainer')
  console.log(state)
  const {
    isFetching,
    timestamp,
    receipt,
    checked
  } = state.app.signature

  const {
    status
  } = state.app.submission

  const error = state.app.error

  return {
    isFetching,
    timestamp,
    receipt,
    status,
    checked,
    error
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onSignatureClick: (signed) => {
      dispatch(updateSignature(signed))
    },
    onSignatureCheck: (checked) => {
      dispatch(checkSignature(checked))
    },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignatureContainer)
