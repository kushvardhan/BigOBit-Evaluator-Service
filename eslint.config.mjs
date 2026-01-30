import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  // 🚫 Ignore compiled output
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      prettier,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      /* 🔀 Import sorting */
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      /* 🧹 Code quality */
      "no-var": "error",
      "prefer-const": "error",
      "no-multi-spaces": "error",
      "space-in-parens": "error",
      "no-multiple-empty-lines": "error",

      /* 🎨 Prettier */
      "prettier/prettier": "error",
    },
  },
];
