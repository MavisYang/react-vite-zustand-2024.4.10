/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-09 20:07:30
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-11 15:55:49
 * @Description:
 */
module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
}
