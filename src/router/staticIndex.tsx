/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 11:22:08
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-21 15:09:39
 * @Description: 静态路由
 */
import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { HomeOutlined, LayoutOutlined, UserOutlined, ProfileOutlined } from '@ant-design/icons'
import App from '../App'
import ErrorPage from '@components/ErrorPage'

const Login = lazy(() => import('@pages/Login/index'))
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const TablePage = lazy(() => import('@pages/TablePage'))

export function authLoader() {
    return { isAdmin: true }
}

console.log('routes')

const routes = [
    {
        path: '/',
        element: <App />,
        loader: authLoader,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: 'home',
                        name: '首页',
                        icon: <HomeOutlined />,
                        element: <Home />,
                    },
                    {
                        path: 'about',
                        name: '关于',
                        icon: <LayoutOutlined />,
                        element: <About />,
                    },
                    {
                        path: 'table',
                        name: '列表',
                        icon: <ProfileOutlined />,
                        element: <TablePage />,
                    },
                    {
                        path: 'child',
                        name: '个人页',
                        icon: <UserOutlined />,
                        children: [
                            {
                                path: '/child/detail',
                                name: '详情',
                                element: <div>详情</div>,
                            },
                        ],
                    },
                    {
                        path: '*',
                        element: <Navigate to='/' />,
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/404',
        element: <ErrorPage />,
    },
]
export { routes }

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routes)
