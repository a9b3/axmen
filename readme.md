# axmen

## Install

```sh
npm install axmen --save
```

## Usage

```javascript
import axmen from 'axmen'

axmen.configure({
	namespace: 'Aliens are real',
})

axmen.log('I see dead people.')
// => [Aliens are real]: I see dead people.
```

Disable logs via env variables

```sh
DISABLE_AXMEN=true npm run test
```