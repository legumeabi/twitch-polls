import { defineConfig, globalIgnores } from "eslint/config";
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
  globalIgnores(['*.md', 'build/', 'dist/']),
  {
    extends: [
      pluginVue.configs['flat/essential'],
      js.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
]);
