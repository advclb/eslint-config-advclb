"use strict";

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
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  }
};
