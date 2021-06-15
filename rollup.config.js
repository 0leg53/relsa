import { writeFileSync } from 'fs';

import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/relsa.js',
      format: 'umd',
      name: 'Relsa',
      sourcemap: false,
    },
    {
      file: './module/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    scss({
      output: function (styles, styleNodes) {
        postcss([
          autoprefixer({
            overrideBrowserslist: 'last 2 versions',
          }),
          cssnano(),
        ])
          .process(styles, {
            from: undefined,
          })
          .then((result) => {
            writeFileSync('dist/relsa.css', result.css);
            writeFileSync('module/relsa.css', result.css);
          });
      },
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};
