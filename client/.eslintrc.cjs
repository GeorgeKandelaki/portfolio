// .eslintrc.cjs
module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
    plugins: ["react", "react-refresh"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
    ignorePatterns: ["dist"],
    settings: { react: { version: "detect" } },
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "no-undef": "error",
        "no-use-before-define": "error",
        "react-refresh/only-export-components": "off",
        "default-param-last": "warn",
        "block-scoped-var": "error",
        "react/jsx-uses-vars": "warn",
        "react/jsx-uses-react": "off",
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
    },
};
