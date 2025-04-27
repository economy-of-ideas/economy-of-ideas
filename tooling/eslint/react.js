import reactPlugin from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  reactHooks.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react-hooks/react-compiler": "error",
      "no-restricted-imports": [
        "error",
        { paths: [{ name: "react", importNames: ["default"] }] },
      ],
      "react/no-unused-prop-types": "warn",
      "react/hook-use-state": "warn",
    },
    languageOptions: {
      globals: {
        React: "writable",
      },
    },
  },
];
