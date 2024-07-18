# 项目简介

基于 react-vite-zustand-ts-pc 开发的后台管理系统

## 安装及使用

```shell
# 安装依赖
pnpm install(推荐使用pnpm)

# 启动
pnpm start

# 构建
pnpm build

# 预览
pnpm preview

```

## git 提交

```shell
# 添加到暂存区
git add -a

# 提交
git commit -m "feat: 添加xx功能"

# 推送
git push
```

# 相关技术

| 技术                             | 官网                              | 描述             |
| -------------------------------- | --------------------------------- | ---------------- |
| Vite 5.X                         | https://cn.vitejs.dev/            | 基础脚手架       |
| React Router 6.X                 | https://reactrouter.com/en/main   | react 路由管理   |
| ant-design 5.X                   | https://ant.design/index-cn       | ui 组件          |
| @ant-design/pro-components 2.4.0 | https://procomponents.ant.design/ | 中后台高阶组件   |
| zustand 4.5.2                    | https://mobx.js.org/README.html   | 轻量级状态管理   |
| typescript                       | -                                 | 代码类型规范     |
| axios                            | -                                 | 数据请求         |
| prettier                         | -                                 | 代码美化，格式化 |
| eslint                           | -                                 | 代码规范         |
| stylelint                        | -                                 | css 代码规范     |
| husky                            | -                                 | git commit 检验  |
| lint-staged                      | -                                 | git commit 检验  |

# 目录结构

```bash
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
├─ src                        # 项目源代码
│   ├─ api                    # 接口请求
│   ├─ assets                 # 静态资源
│   ├─ components             # 全局公用组件
│   ├─ hooks                  # hooks
│   ├─ layout                 # 布局组件
│   ├─ pages                  # pages 所有页面
│   ├─ router                 # 路由配置
│   ├─ stores                 # 全局 store管理
│   ├─ styles                 # 样式
│   ├─ utils                  # 全局公用方法
│   ├─ App.tsx                # 入口页面
│   ├─ global.d.ts            # 全局声明文件
│   └─ main.tsx               # 源码入口
├─ .editorconfig                # 编辑器配置
├─ .env                        # 环境变量
├─ .env.development            # 开发环境变量
├─ .env.production              # 生产环境变量
├─ .env.test                    # 测试环境变量
├─ .eslintignore                 # eslint忽略文件
├─ .eslintrc.js                  # eslint配置
├─ .gitignore                    # git忽略文件
├─ .prettierignore                # prettier忽略文件
└── .prettierrc            # prettier配置
└── .eslintignore             # eslint忽略文件
└── .eslintrc.js              # eslint配置
└── vite.config.ts            # vite打包配置
└── index.html                # html模板
└── package.json              # package.json
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
}
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
