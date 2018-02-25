module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "globals": {
    "alert": true,
    "expect": true,
    "it": true,
    "navigator": true,
  },
  "rules": {
    "class-methods-use-this": "off",
    "import/extensions": ["error", "never"],
    "import/no-named-as-default": "off",
    "max-len": ["error", { code: 150 }],
    "no-alert": "warn",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-underscore-dangle": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "warn",
  }
};
