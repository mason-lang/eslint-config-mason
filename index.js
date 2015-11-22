module.exports = {
	extends: 'eslint:recommended',
	ecmaFeatures: {
		arrowFunctions: true,
		blockBindings: true,
		classes: true,
		defaultParams: true,
		destructuring: true,
		forOf: true,
		generators: true,
		modules: true,
		objectLiteralShorthandMethods: true,
		objectLiteralShortandProperties: true,
		restParams: true,
		spread: true,
		templateStrings: true
	},
	globals: {console: true, describe: true, it: true, module: true, require: true},
	// Ordered like in http://eslint.org/docs/rules/
	rules: {
		// Possible Errors
		'no-console': 0,
		'no-inner-declarations': 0,

		// Best Practices
		'consistent-return': 1,
		curly: [1, 'multi'],
		'default-case': 1,
		'dot-location': [1, 'property'],
		'dot-notation': 1,
		'eqeqeq': 1,
		'no-case-declarations': 1,
		'no-empty-label': 1,
		'no-empty-pattern': 1,
		'no-eval': 1,
		'no-extend-native': 1,
		'no-extra-bind': 1,
		'no-fallthrough': 1,
		'no-floating-decimal': 1,
		'no-implicit-coercion': 1,
		'no-implied-eval': 1,
		'no-iterator': 1,
		'no-lone-blocks': 1,
		'no-multi-spaces': 1,
		'no-multi-str': 1,
		'no-native-reassign': 1,
		'no-new-wrappers': 1,
		'no-new': 1,
		'no-octal-escape': 1,
		'no-proto': 1,
		'no-return-assign': 1,
		'no-self-compare': 1,
		'no-sequences': 1,
		'no-throw-literal': 1,
		'no-unused-expressions': 1,
		'no-useless-call': 1,
		'no-void': 1,
		'no-with': 1,
		radix: 1,

		// Variables
		'no-catch-shadow': 1,
		'no-label-var': 1,
		'no-shadow-restricted-names': 1,
		'no-undef-init': 1,
		'no-undef': 1,
		'no-unused-vars': [1, {'argsIgnorePattern': '^_'}],

		// Stylistic Issues
		'array-bracket-spacing': 1,
		'brace-style': 1,
		camelcase: 1,
		'comma-spacing': 1,
		'comma-style': [1, 'last'],
		'computed-property-spacing': 1,
		'eol-last': 1,
		'func-style': [1, 'declaration', {allowArrowFunctions: true}],
		indent: [1, 'tab', {'SwitchCase': 1}],
		'key-spacing': 1,
		'linebreak-style': 1,
		'max-len': [1, 100, 4],
		'new-cap': 1,
		'no-continue': 1,
		'no-inline-comments': 1,
		'no-multiple-empty-lines': [1, {'max': 2}],
		'no-negated-condition': 1,
		'no-new-object': 1,
		'no-plusplus': 1,
		'no-spaced-func': 1,
		'no-trailing-spaces': 1,
		'no-unneeded-ternary': 1,
		'object-curly-spacing': 1,
		'operator-assignment': [1, 'never'],
		'operator-linebreak': [1, 'after'],
		'padded-blocks': [1, 'never'],
		'quote-props': [1, 'as-needed'],
		quotes: [1, 'single'],
		semi: [1, 'never'],
		'space-after-keywords': 1,
		'space-before-blocks': 1,
		'space-before-blocks': [1, 'always'],
		'space-before-function-paren': [1, 'never'],
		'space-before-keywords': 1,
		'space-in-parens': [1, 'never'],
		'space-infix-ops': 1,
		'space-return-throw-case': 1,
		'space-unary-ops': 1,
		'spaced-comment': 1,
		'wrap-regex': 1,

		// EcmaScript 6
		'arrow-body-style': 1,
		'arrow-spacing': 1,
		'constructor-super': 1,
		'generator-star-spacing': [1, 'after'],
		'no-class-assign': 1,
		'no-const-assign': 1,
		'no-dupe-class-members': 1,
		'no-this-before-super': 1,
		'no-var': 1,
		'object-shorthand': 1,
		'prefer-arrow-callback': 1,
		'prefer-const': 1,
		'prefer-spread': 1,
		'prefer-template': 1,
		'require-yield': 1
	}
}