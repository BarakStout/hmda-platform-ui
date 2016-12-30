jest.unmock('../../src/js/components/DivisionHeader.jsx')

import DivisionHeader from '../../src/js/components/DivisionHeader.jsx'
import Wrapper from '../Wrapper.js'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

describe('divisionHeader', () => {

  const header = TestUtils.renderIntoDocument(
    <Wrapper><DivisionHeader>testtext</DivisionHeader></Wrapper>
  );
  const headerNode = ReactDOM.findDOMNode(header)

  it('renders the header', () => {
    expect(headerNode).toBeDefined()
  })

  it('sets the text prop appropriately', () => {
    expect(header.props.children.props.children).toEqual('testtext')
  })

  it('renders correctly', () => {
    expect(headerNode.textContent).toEqual('testtext')
  })

})
