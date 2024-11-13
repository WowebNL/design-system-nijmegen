import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import { cwd } from "node:process";
import { basename } from "node:path";

let components = [
  {
    input: "grid/index.scss",
    output: "dist/grid.css",
  },
];

let config = [];
components.forEach((component) => {
  config.push({
    input: component.input,
    output: {
      file: component.output,
      sourcemap: false,
      format: "esm",
      compact: true,
    },
    plugins: [
      postcss({
        extensions: [".css", ".scss"],
        plugins: [discardDuplicates()],
        extract: true,
      }),
    ],
  });
});

export default config;
