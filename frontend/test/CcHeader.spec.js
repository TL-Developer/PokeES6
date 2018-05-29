import * as CcHeader from '../src/components/Header'
const expect = require('chai').expect

describe('Component Header', () => {
  it('should render a html with menu: Home, About and Github', () => {
    expect(CcHeader.template).to.contain(`
      <li route="/">Home</li>
      <li route="/about">About</li>
      <li>
        <a href="https://github.com/TL-Developer/PokeES6" target="_black">Github</a>
      </li>
    `)
  })
})
