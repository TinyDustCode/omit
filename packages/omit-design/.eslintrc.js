require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  extends: [
    "@rushstack/eslint-config/profile/web-app",
    "@rushstack/eslint-config/mixins/react",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 7,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@rushstack/typedef-var": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "react/jsx-no-bind": "off",
    "import/prefer-default-export": 0,
    "@typescript-eslint/explicit-member-accessibility": "off",
  },
};
