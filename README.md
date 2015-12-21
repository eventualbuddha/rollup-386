```
rollup-368 $ cat index.js
import RR from 'react-redux/dist/react-redux'
console.log(RR);

rollup-368 $ cat rollup.config.js
import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  plugins: [npm(), commonjs()]
};

rollup-368 $ ./node_modules/.bin/rollup -c | grep reactRedux
Treating 'rollup-plugin-npm' as external dependency
Treating 'rollup-plugin-commonjs' as external dependency
var reactRedux = (function (module) {
console.log(reactRedux);
```
