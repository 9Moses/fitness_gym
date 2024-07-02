// prettier.config.ts
import { Config } from "prettier";

const config: Config = {
  plugins: [require("prettier-plugin-tailwindcss")],
  singleQuote: true,
  semi: false,
  trailingComma: "all",
};

export default config;
