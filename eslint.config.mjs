import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    ignores: ['*.md', 'build/**/*'],
  },
  ...pluginVue.configs['flat/essential'],
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
];
