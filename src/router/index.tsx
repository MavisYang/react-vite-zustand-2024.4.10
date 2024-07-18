/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 14:53:20
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-26 17:17:30
 * @Description:
 */
// /*
//  * @Author: yangmiaomiao
//  * @Date: 2024-04-11 11:22:08
//  * @LastEditors: yangmiaomiao
//  * @LastEditTime: 2024-06-24 20:18:59
//  * @Description:
//  */
// import { createElement, lazy } from 'react'
// import { createBrowserRouter, Navigate, useRoutes } from 'react-router-dom'
// import { HomeOutlined, LayoutOutlined, UserOutlined, ProfileOutlined } from '@ant-design/icons'
// import App from '../App'
// import ErrorPage from '@components/ErrorPage'
// import staticRouter from './staticRouter'
// import dynamicRouter from './dynamicRouter'
// // import * as icons from '@ant-design/icons'
// const BasicLayout = lazy(() => import('../layout'))

// const Login = lazy(() => import('@pages/Login/index'))
// const Home = lazy(() => import('@pages/Home'))
// const About = lazy(() => import('@pages/About'))
// const TablePage = lazy(() => import('@pages/TablePage'))

// export function authLoader() {
//     console.log('authLoader')

//     return { isAdmin: true }
// }

// const routes = [
//     {
//         path: '/',
//         // element: <BasicLayout />,
//         Comment: BasicLayout,
//         loader: authLoader,
//         children: [
//             {
//                 path: '/home',
//                 name: '首页',
//                 icon: <HomeOutlined />,
//                 element: createElement(lazy(() => import('@pages/Home'))),
//                 // <Home />,
//             },
//             {
//                 path: '/about',
//                 name: '关于',
//                 icon: <LayoutOutlined />,
//                 element: <About />,
//             },
//             {
//                 path: '/table',
//                 name: '列表',
//                 icon: <ProfileOutlined />,
//                 element: <TablePage />,
//             },
//             {
//                 path: '/child',
//                 name: '个人页',
//                 icon: <UserOutlined />,
//                 children: [
//                     {
//                         path: '/child/detail',
//                         name: '详情',
//                         element: <div>详情</div>,
//                     },
//                 ],
//             },
//             // {
//             //     path: '*',
//             //     element: <Navigate to='/' />,
//             // },
//             // {
//             //     errorElement: <ErrorPage />,
//             //     children: [
//             //         {
//             //             path: 'home',
//             //             name: '首页',
//             //             icon: <HomeOutlined />,
//             //             element: createElement(lazy(() => import('@pages/Home'))),
//             //             // <Home />,
//             //         },
//             //         {
//             //             path: 'about',
//             //             name: '关于',
//             //             icon: <LayoutOutlined />,
//             //             element: <About />,
//             //         },
//             //         {
//             //             path: 'table',
//             //             name: '列表',
//             //             icon: <ProfileOutlined />,
//             //             element: <TablePage />,
//             //         },
//             //         {
//             //             path: 'child',
//             //             name: '个人页',
//             //             icon: <UserOutlined />,
//             //             children: [
//             //                 {
//             //                     path: '/child/detail',
//             //                     name: '详情',
//             //                     element: <div>详情</div>,
//             //                 },
//             //             ],
//             //         },
//             //         {
//             //             path: '*',
//             //             element: <Navigate to='/' />,
//             //         },
//             //     ],
//             // },
//         ],
//     },
//     {
//         path: '/login',
//         element: <Login />,
//     },
//     {
//         path: '/404',
//         element: <ErrorPage />,
//     },
//     {
//         path: '*',
//         element: <ErrorPage />,
//     },
// ]
// export { routes }

// const router = [
//     ...staticRouter,
//     // ...dynamicRouter()
// ]

// console.log(router, 'router')

// // eslint-disable-next-line react-refresh/only-export-components
// export default createBrowserRouter(routes, {
//     basename: '/',
// })

import { useEffect, lazy } from 'react'
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'
import { App } from 'antd'
import { antdUtils } from '@utils/antd'
import ErrorPage from '@components/ErrorMessage/errorPage'
import RouterErrorElement from '@components/ErrorMessage/routerErrorElement'
const Login = lazy(() => import('@pages/Login/index'))
const BasicLayout = lazy(() => import('../layout'))

export const router = createBrowserRouter(
    [
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/404',
            element: <ErrorPage />,
        },
        {
            path: '*',
            Component: BasicLayout,
            children: [],
            errorElement: <RouterErrorElement />,
        },
    ],
    // {
    //     basename: '/',
    // },
)

export const toLoginPage = () => {
    router.navigate('/login')
}

function findNodeByPath(routes: RouteObject[], path: string) {
    for (let i = 0; i < routes.length; i += 1) {
        const element = routes[i]

        if (element.path === path) return element

        findNodeByPath(element.children || [], path)
    }
}
export const addRoutes = (parentPath: string, routes: RouteObject[]) => {
    if (!parentPath) {
        router.routes.push(...(routes as any))
        return
    }

    const curNode = findNodeByPath(router.routes, parentPath)

    if (curNode?.children) {
        curNode.children.push(...routes)
    } else if (curNode) {
        curNode.children = routes
    }
}
export const replaceRoutes = (parentPath: string, routes: RouteObject[]) => {
    if (!parentPath) {
        router.routes.push(...(routes as any))
        return
    }

    const curNode = findNodeByPath(router.routes, parentPath)

    if (curNode) {
        curNode.children = routes
    }
}

const Router = () => {
    const { notification, message, modal } = App.useApp()

    useEffect(() => {
        antdUtils.setMessageInstance(message)
        antdUtils.setNotificationInstance(notification)
        antdUtils.setModalInstance(modal)
    }, [notification, message, modal])

    return <RouterProvider router={router} />
}

export default Router
