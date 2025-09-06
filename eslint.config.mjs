import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import unicorn from 'eslint-plugin-unicorn';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import playwright from 'eslint-plugin-playwright';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,

  reactRecommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },

  ...compat.extends('next/core-web-vitals'),

  {
    plugins: {
      unicorn,
      'simple-import-sort': simpleImportSort,
      playwright,
      import: importPlugin,
    },
    rules: {
      'simple-import-sort/imports': 'off',
      'simple-import-sort/exports': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'no-unused-vars': 'warn'
    },
  },

  {
    files: ['*.js'],
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },

  prettierConfig,
];