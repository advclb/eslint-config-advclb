"use strict";

module.exports = {
  extends: [
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ]
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"]
  }
};
