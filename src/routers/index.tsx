/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 11:22:08
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-11 15:44:51
 * @Description:
 */
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))

const routers = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
]
export { routers }

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routers)
