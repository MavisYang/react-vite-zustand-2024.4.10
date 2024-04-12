/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-09 20:07:30
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-11 16:21:03
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={routers} />
    </React.StrictMode>,
)
