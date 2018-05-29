import * as CcHeader from '../src/components/Footer'
const expect = require('chai').expect

describe('Component Header', () => {
  it('should render a html with text: by: Tiago Lima', () => {
    expect(CcHeader.template).to.contain(`By: Tiago Lima`)
  })
})
