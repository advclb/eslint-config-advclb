# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [18.0.1] - 2019-12-20

### Fixed

- import/no-extraneous-dependencies: off
  Airbnb uses a whitelist to execlude files that require `devDependencies`. But
  it doesn't cover many cases where you need different file names. Developers
  should clearly know what packages are `dependencies` and `devDependencies`.
  The import strategy has a lot of possibility. Here is no use to restrict this
  in linter.

## [18.0.0] - 2019-11-21

### Fixed

- jsx-a11y/label-has-associated-control: assert either
  Revert to upstream's default config. [Here isn't enough evidence to prove the necessity of "both"](https://github.com/airbnb/javascript/pull/2136). If here are such devices and software, it is their bug to fix.

[unreleased]: https://github.com/advclb/eslint-config/compare/v18.0.1...HEAD
[18.0.1]: https://github.com/advclb/eslint-config/compare/v18.0.0...v18.0.1
[18.0.0]: https://github.com/advclb/eslint-config/releases/tag/v18.0.0
