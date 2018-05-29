export const template = `
  <footer>
    <h5>By: Tiago Lima</h5>
  </footer>
`

export function render () {
  document.body.insertAdjacentHTML('beforeend', template)
}
