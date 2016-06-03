// dev environment
const axmen = require('../lib/index.js').default

axmen.configure({
  namespace: 'Test',
})
const test = {
  a: {
    name: 'sam',
  },
}
axmen.log('hi', 'what', `hihi`, test)
