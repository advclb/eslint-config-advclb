"use strict";

const importIgnore = ["^!!"];

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  },
  rules: {
    "import/no-unresolved": [2, { ignore: importIgnore }]
  },
  settings: {
    "import/ignore": importIgnore
  }
};
