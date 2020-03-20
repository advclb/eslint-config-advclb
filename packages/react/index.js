"use strict";

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/react"
  ],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    "import/extensions": [".js", ".jsx"],
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect"
    },
    linkComponents: [{ name: "Link", linkAttribute: "to" }]
  }
};
