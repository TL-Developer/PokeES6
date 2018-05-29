export const template = `
  <header>
    <ul class="list">
      <li route="/">Home</li>
      <li route="/about">About</li>
      <li>
        <a href="https://github.com/TL-Developer/PokeES6" target="_black">Github</a>
      </li>
    </ul>
    <div class="app-title">
      <h3>.:: PokeLima ::.</h3>
    </div>
  </header>
`

export function render () {
  document.body.insertAdjacentHTML('afterbegin', template)
}
