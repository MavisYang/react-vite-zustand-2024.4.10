/*
 * @Author: yangmiaomiao
 * @Date: 2024-06-21 11:27:28
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-22 14:37:02
 * @Description:
 */
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
import ErrorPage from '@components/ErrorPage'

const Login = lazy(() => import('@pages/Login/index'))

const baseRouter: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
    // {
    //     path: '/main/*',
    //     element: <Main />,
    //     children: [{ path: '', element: <></> }],
    // },
    {
        path: '*',
        element: <ErrorPage />,
    },
]
export default baseRouter
