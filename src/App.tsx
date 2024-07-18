// /*
//  * @Author: yangmiaomiao
//  * @Date: 2024-04-09 20:07:30
//  * @LastEditors: yangmiaomiao
//  * @LastEditTime: 2024-06-24 20:14:39
//  * @Description:
//  */

// import { createElement, lazy, useState, useEffect } from 'react'
// import routerIndex, { authLoader } from './router'
// import 'dayjs/locale/zh-cn'
// import 'antd/dist/reset.css'
// import './styles/index.scss'
// import Layout from './layout' // 引入布局组件
// import ErrorPage from '@components/ErrorPage'
// import { useMenuStore } from '@stores/index'
// import { getAuthMenuListApi } from '@api/services/login'
// import { RouterProvider,BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import DynamicRoutes from './router/dynamicRouter'
// // import type { RouteObject } from 'react-router-dom'

// const Login = lazy(() => import('@pages/Login/index'))

// console.log('AppMain')
// const modules = import.meta.glob('./pages/**/*.tsx') // 使用import.meta.glob导入所有pages子目录下的index.tsx文件

// const components = Object.keys(modules).reduce((prev, cur) => {
//     // 根据导入的模块名生成一个map
//     prev[cur.replace('./pages/', '')] = modules[cur]

//     return prev
// }, {} as any)

// // export const router = createBrowserRouter([
// //     {
// //         path: '/',
// //         // loader: authLoader,
// //         element: <Layout />,
// //         children: [],
// //     },
// //     {
// //         path: '/login',
// //         element: <Login />,
// //     },
// //     {
// //         path: '/404',
// //         element: <ErrorPage />,
// //     },
// //     {
// //         path: '*',
// //         element: <ErrorPage />,
// //     },
// // ])

// const AppMain = () => {
//     // const { setAuthMenuList } = useMenuStore() //
//     // const [menus, setMenus] = useState<any>([]) // 初始化菜单数据为空数组
//     // useEffect(() => {
//     //     // 获取菜单数据
//     //     console.log('useEffect')

//     //     getMenusList()
//     // }, [])

//     // const getMenusList = async () => {
//     //     console.log('getMenusList')

//     //     const { data } = await getAuthMenuListApi()
//     //     setMenus(data)
//     //     setAuthMenuList(data)
//     //     // console.log(routerIndex.routes[0], 'routerIndex')

//     //     // console.log(router.routes, 'router1')
//     //     // console.log(router.routes[0].children![0].children, 'routers')
//     //     // 根据获取的菜单数据动态添加路由

//     //     router.routes[0].children = data.map((menu) => ({
//     //         // ...menu,
//     //         path: menu.path,
//     //         name: menu.name,
//     //         icon: createElement(menu.icon),
//     //         element: createElement(lazy(components[menu.component])),
//     //     }))
//     //     console.log(router.routes[0], 'router2')
//     // }
//     // return <RouterProvider router={router} />
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <DynamicRoutes />
//             </Routes>
//         </BrowserRouter>
//     )
// }
import { useEffect, useMemo } from 'react'
import { ConfigProvider, App as AntdApp, ThemeConfig } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import { i18n } from '@utils/i18n'
import { useGlobalStore } from '@stores/index'

import Router from '@router/index'

function AppMain() {
    const { lang } = useGlobalStore()

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const curTheme: ThemeConfig = useMemo(() => {
        return {
            cssVar: true,
            hashed: false,
            components: {
                Layout: {
                    headerBg: '#04336b',
                    headerColor: '#fff',
                    headerPadding: '0 16px',
                    siderBg: '#fff',
                },
            },
        }
    }, [])

    return (
        <ConfigProvider locale={lang === 'zh' ? zhCN : enUS} theme={curTheme}>
            <AntdApp>
                <Router />
            </AntdApp>
        </ConfigProvider>
    )
}
export default AppMain
