jest.unmock('../../src/js/components/EditsTableWrapper.jsx')
jest.unmock('../../src/js/components/EditsTable.jsx')
jest.unmock('../../src/js/components/EditsTableRow.jsx')
jest.unmock('../../src/js/components/EditsTableCell.jsx')
jest.unmock('../../src/js/components/EditsHeaderDescription.jsx')

import fs from 'fs'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Wrapper from '../Wrapper.js'
import EditsTableWrapper from '../../src/js/components/EditsTableWrapper.jsx'

const types = {
  syntactical: JSON.parse(fs.readFileSync('./__tests__/json/syntactical.json')),
  validity: JSON.parse(fs.readFileSync('./__tests__/json/validity.json')),
  quality: JSON.parse(fs.readFileSync('./__tests__/json/quality.json')),
  macro: JSON.parse(fs.readFileSync('./__tests__/json/macro.json'))
}

const typesNoMacro = {
  syntactical: JSON.parse(fs.readFileSync('./__tests__/json/syntactical.json')),
  validity: JSON.parse(fs.readFileSync('./__tests__/json/validity.json')),
  quality: JSON.parse(fs.readFileSync('./__tests__/json/quality.json')),
  macro: {
    'edits': []
  }
}

describe('EditsByType', function() {
  it('properly renders child elements', function() {
    const renderer = TestUtils.createRenderer()
    const renderedEdits = renderer.render(
      <EditsTableWrapper types={types} editTypeFromPath="syntacticalvalidity"/>
    )
    const editsByType = renderer.getRenderOutput()

    expect(editsByType.props.children.length).toEqual(4)
  })

  it('properly renders child elements when no macro edits are present', function() {
    const renderer = TestUtils.createRenderer()
    const renderedEdits = renderer.render(
      <EditsTableWrapper types={typesNoMacro} editTypeFromPath="syntacticalvalidity"/>
    )
    const editsByTypeNoMacro = renderer.getRenderOutput()

    expect(editsByTypeNoMacro.props.children.length).toEqual(4)
  })

})
