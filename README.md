# Adventure Club ESLint Config

Extend Airbnb's ESLint config and fix annoying rules.

### How to use

```bash
npm install --save-dev @advclb/eslint-config eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Edit `.eslintrc`:

```json
{
  "extends": ["@advclb", ...],
  ...
}
```

## What is improved

### jsx-a11y/label-has-associated-control: both -> either

Revert to upstream's default config. [Here isn't enough evidence to prove the necessity of "both"](https://github.com/airbnb/javascript/pull/2136). If here are such devices and software, it is their bug to fix.
