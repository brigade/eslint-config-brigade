module.exports = {
  extends: [
    './index.js',
  ],

  plugins: [
    'jsx-a11y',
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'jsx-a11y/accessible-emoji': 2,
    'jsx-a11y/alt-text': 2,
    'jsx-a11y/anchor-has-content': 2, // NOTE: We recommend customizing this for your app. https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v6.0.2/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-is-valid': 1, // Nice to make this a 2, but this leaves the library config more flexible
    'jsx-a11y/aria-activedescendant-has-tabindex': 2,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/aria-proptypes': 2,
    'jsx-a11y/aria-role': [2, { ignoreNonDOM: true }],
    'jsx-a11y/aria-unsupported-elements': 2,
    'jsx-a11y/click-events-have-key-events': 1, // TODO: will be moved to a 2 once Brigade has updated our code
    'jsx-a11y/heading-has-content': 2, // NOTE: We recommend customizing this for your app. https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v6.0.2/docs/rules/heading-has-content.md
    'jsx-a11y/html-has-lang': 2,
    'jsx-a11y/iframe-has-title': 2,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/interactive-supports-focus': 1, // TODO: will be moved to a 2 once Brigade has updated our code
    'jsx-a11y/label-has-for': 2, // NOTE: We recommend customizing this for your app. https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v6.0.2/docs/rules/label-has-for.md
    'jsx-a11y/lang': 2,
    'jsx-a11y/media-has-caption': 2, // NOTE: We recommend customizing this for your app. https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v6.0.2/docs/rules/media-has-caption.md
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/no-autofocus': 2, // NOTE: In the rare case that you actually need this (ex. Google home page search bar autofocus), use a local override
    'jsx-a11y/no-distracting-elements': 2,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 2,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 2,
    'jsx-a11y/no-noninteractive-tabindex': 2,
    'jsx-a11y/no-onchange': 2,
    'jsx-a11y/no-redundant-roles': 2,
    'jsx-a11y/no-static-element-interactions': 1, // TODO: will be moved to a 2 once Brigade has updated our code
    'jsx-a11y/role-has-required-aria-props': 1, // TODO: will be moved to a 2 once Brigade has updated our code
    'jsx-a11y/scope': 2,
    'jsx-a11y/tabindex-no-positive': 2,
    'react/default-props-match-prop-types': 2,
    'react/display-name': 0, // Babel handles this for us: https://babeljs.io/docs/plugins/preset-react/
    'react/forbid-component-props': 0, // TODO: we are discussing this
    'react/forbid-elements': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/forbid-prop-types': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-filename-extension': 2,
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-pascal-case': [2, { allowAllCaps: true }],
    'react/jsx-sort-props': 2,
    'react/jsx-tag-spacing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-array-index-key': 1,
    'react/no-children-prop': 2,
    'react/no-danger': 1,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 1,
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': 2,
    'react/no-will-update-set-state': 1,
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': [2, { component: true, html: true }],
    'react/sort-comp': 2,
    'react/sort-prop-types': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
  },
};
