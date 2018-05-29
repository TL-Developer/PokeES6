import * as CcAlertInfo from '../src/components/AlertInfo'
const expect = require('chai').expect

describe('Component Alert Info', () => {
  it('should render a html with text: Sem conexão com a internet :(', () => {
    expect(CcAlertInfo.template).to.contain(`Sem conexão com a internet :(`)
  })
})
