# axmen

## Install

```sh
npm install axmen --save
```

## Usage

```javascript
import axmen from 'axmen'

// optional: set a namespace for logs
axmen.configure({
	namespace: 'Aliens are real',
	showEnv: true, // defaults to true
})

axmen.log('I see dead people.')
// => [Aliens are real] [env=dev] I see dead people.
```

Disable logs via env variables

```sh
DISABLE_AXMEN=true npm run test
# tests will run without logs
```