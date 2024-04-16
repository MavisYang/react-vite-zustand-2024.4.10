/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-09 20:07:30
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-12 17:04:47
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'
// import 'antd/dist/reset.css'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={routers} />
    </React.StrictMode>,
)
