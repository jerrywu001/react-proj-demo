module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'airbnb',
        'typescript'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'settings': {
        'import/resolver': {
            webpack: {
                config: './config/webpack.config.js',
            },
        },
    },
    'rules': {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-target-blank': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-filename-extension': 'off',
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'no-var': 'warn',
        'quotes': [
            'warn',
            'single'
        ],
        'quote-props': 0,
        'semi': [
            'warn',
            'always'
        ],
        'no-extra-semi': 'warn',
        'semi-spacing': 'warn',
        'no-eval': 0,
        'new-cap': 0,
        'no-bitwise': 0,
        'indent': ['warn', 4, { SwitchCase: 1 }],
        'no-alert': 0,
        'no-console': 0,
        'no-plusplus': 0,
        'no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'linebreak-style': [0],
        'global-require': 'warn',
        'comma-dangle': 'warn',
        'prefer-template': 'warn',
        'prefer-const': 'warn',
        'no-shadow': 'warn',
        'prefer-arrow-callback': 'warn',
        'object-property-newline': 'warn',
        'spaced-comment': 'warn',
        'no-param-reassign': 0,
        'vars-on-top': 'warn',
        'no-use-before-define': 'warn',
        'block-scoped-var': 'warn',
        'no-unused-vars': 'off',
        'padded-blocks': 'warn',
        'comma-spacing': 'warn',
        'eqeqeq': 'warn',
        'no-continue': 'off',
        'eol-last': 'warn',
        'one-var-declaration-per-line': 'warn',
        'one-var': 'warn',
        'space-before-function-paren': 'warn',
        'object-curly-spacing': 'warn',
        'space-infix-ops': 'warn',
        'no-multi-assign': 0,
        'no-trailing-spaces': 'warn',
        'keyword-spacing': 'warn',
        'no-unused-expressions': 'warn',
        'space-before-blocks': 'warn',
        'no-multi-spaces': 'warn',
        'no-redeclare': 'warn',
        'no-lonely-if': 'off',
        'guard-for-in': 'off',
        'no-undef': 'off',
        'no-restricted-syntax': 'off',
        'no-constant-condition': [
            'warn',
            {
                'checkLoops': false
            }
        ],
        'arrow-body-style': 'off',
        'no-nested-ternary': 'off',
        'no-mixed-operators': 'off',
        'class-methods-use-this': 'off',
        'prefer-destructuring': 0,
        'function-paren-newline': 0,
        'prefer-promise-reject-errors': 0,
        'no-restricted-globals': 0,
        'consistent-return': 0,
        'max-len': 0,
        'no-else-return': 0,
        'operator-assignment': 0,
        'no-underscore-dangle': 0,
        'object-shorthand': 0,
        'dot-notation': 0,
    }
};
