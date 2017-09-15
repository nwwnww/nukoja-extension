const Helper = require('./util/mascara-test-helper.js')

window.addEventListener('load', () => {
  // inject app container
  const body = document.body
  const container = document.createElement('div')
  container.id = 'app-content'
  body.appendChild(container)
  // start ui
  require('../src/ui.js')
})