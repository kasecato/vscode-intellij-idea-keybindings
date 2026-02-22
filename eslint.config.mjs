import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores(["dist/", "**/*.mjs", "**/*.js"]),

    eslint.configs.recommended,
    prettierConfig,
    tseslint.configs.recommended,
    tseslint.configs.stylisticTypeChecked,

    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
]);
