module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
  rules: {
    // Revert to upstream's default config. Here isn't enough evidence to prove
    // the necessity of "both". If here are such devices and software, it is their
    // bug to fix. See https://github.com/airbnb/javascript/pull/2136
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "either",
        depth: 25
      }
    ]
  }
};
