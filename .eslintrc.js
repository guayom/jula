module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/prop-types": 0,
        "react/jsx-props-no-spreading": "off",
        "no-underscore-dangle": "off",
        "react/no-unescaped-entities": "off",
        "no-unused-vars": [
            "error",
            {
                "vars": "local",
                "args": "none"
            }
        ],
    }
};