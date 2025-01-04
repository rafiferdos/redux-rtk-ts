import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier' // Import Prettier plugin
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Apply ESLint to JavaScript and TypeScript files
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser', // Use TypeScript parser
      globals: globals.browser,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // ESLint recommended rules
      ...tseslint.configs.recommended.rules, // TypeScript recommended rules
      ...pluginReact.configs.flat.recommended.rules, // React recommended rules
      'react/react-in-jsx-scope': 'off', // Disable React import rule
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
  },
  // Prettier integration
  {
    plugins: {
      prettier, // Register Prettier plugin
    },
  },
  // React-specific settings
  {
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
]
