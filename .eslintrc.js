module.exports = {
  "root": true,
  "env": {
    "node": true,
    "commonjs": true,
    "browser": true,
    "es6": true
  },
  "plugins": ["react"],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "rules": {
    "react/prop-types": "off",
    "eqeqeq": "warn",
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "multiline-ternary": ["warn", "always-multiline"]
  }
}
