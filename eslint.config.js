import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

// Manually convert the old recommended config to a flat config
const oldReactConfig = reactPlugin.configs.recommended;
const reactRecommendedAsFlat = {
	ignores: ['eslint.config.js', './dist/*'],
	plugins: { react: reactPlugin },
	rules: {
		...oldReactConfig.rules,
	},
	settings: {
		...oldReactConfig.settings,
		react: {
			version: 'detect',
		},
	},
};

// Add React Hooks rules
const reactHooksConfig = {
	plugins: { 'react-hooks': reactHooksPlugin },
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn', // This is the rule you need
	},
};

export default [
	reactRecommendedAsFlat,

	reactHooksConfig,

	js.configs.recommended,

	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.react,

	{
		files: ['**/*.{js,jsx,mjs,cjs}'],

		ignores: ['eslint.config.js'],

		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				project: './jsconfig.json',
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},

		rules: {
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-warning-comments': ['warn', { terms: ['!'] }],
			'object-shorthand': 'error',
			'no-param-reassign': [
				'error',
				{
					props: false,
				},
			],

			'import/no-unresolved': 'error',
			'import/order': [
				'error',
				{
					alphabetize: { order: 'asc', caseInsensitive: true },
					groups: [
						'external',
						'internal',
						'builtin',
						['parent', 'sibling', 'index'],
						'unknown',
					],
					pathGroups: [
						{
							pattern: '@/enums/**',
							group: 'type',
							position: 'after',
						},
						{
							pattern: '@/models/**',
							group: 'type',
							position: 'after',
						},
						{
							pattern: '@/api/**',
							group: 'type',
							position: 'after',
						},
						{
							pattern: '@/utilities/**',
							group: 'type',
							position: 'after',
						},
						{
							pattern: '@/functions/**',
							group: 'type',
							position: 'after',
						},
						{
							pattern: '@/tests/**',
							group: 'type',
							position: 'after',
						},
						{
							pattern: '@/**',
							group: 'type',
							position: 'after',
						},
					],
					'newlines-between': 'always',
					pathGroupsExcludedImportTypes: ['builtin'],
					named: true,
				},
			],
			'import/extensions': [
				'error',
				'never',
				{
					css: 'always',
					scss: 'always',
					sass: 'always',
				},
			],
			'import/no-default-export': 'off',
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: [
						'**/*.test.{js,jsx}',
						'**/__tests__/**',
						'**/vitest.setup.js',
						'**/vitest.config.js',
						'**/*.stories.{js,jsx}',
					],
					optionalDependencies: false,
					peerDependencies: false,
				},
			],
		},

		settings: {
			ecmaVersion: 'latest',
			react: {
				version: 'detect',
			},
			'import/resolver': {
				alias: {
					map: [['@', './src']],
					extensions: ['.ts', '.js', '.jsx', '.json'],
				},
			},
		},
	},
];
