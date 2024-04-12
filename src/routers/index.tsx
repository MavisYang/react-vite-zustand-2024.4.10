/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 11:22:08
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-12 17:07:42
 * @Description:
 */
import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
const Login = lazy(() => import('@pages/Login'))
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))

export function authLoader() {
    return { isAdmin: true }
}
const routers = [
    {
        path: '/',
        element: <App />,
        loader: authLoader,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '*',
                element: <Navigate to='/' />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
]
export { routers }

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routers)
