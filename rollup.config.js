import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  plugins: [npm(), commonjs()]
};

