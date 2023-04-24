import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "./src/index.ts",
    output: {
      file: "./dist/bundle.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      typescript(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "./src/index.ts",
    output: {
      file: "./dist/bundle.d.ts",
      format: "cjs",
    },
    plugins: [dts()],
    external: ["react", "react-dom"],
  },
];
