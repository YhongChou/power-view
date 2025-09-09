import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
// import { eslintPluginYazai} from './src/eslint/plugins/eslint-plugin-yazai.js';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {},
  },
  {
    extends: [prettierConfig],
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      // 导入排序规则（基础版本，不依赖 eslint-plugin-import）
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true, // 让其他工具处理声明排序
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
  // // 自定义插件
  // {
  //   plugins: {
  //     yazai: eslintPluginYazai, // 引入自定义插件
  //   },
  //   rules: {
  //     'yazai/no-yazai-vars': 'error', // 使用自定义规则
  //   },
  // },
]);
