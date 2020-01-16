import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
import { eslint } from "rollup-plugin-eslint";

export default {
  input: './src/js/index.js',
  output: {
    name: 'main',
    file: './index.js',
    format: 'iife',
    sourcemap: true
  },
  watch: {
    include: './src/**'
  },
  plugins: [
    json(),
    eslint({
      include: ['./src/js/**']
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
};
