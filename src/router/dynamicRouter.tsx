/*
 * @Author: yangmiaomiao
 * @Date: 2024-06-21 11:31:07
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-24 20:08:51
 * @Description:
 */
// import { lazy, useEffect, useState, useMemo } from 'react'
// import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
// import type { RouteObject } from 'react-router-dom'
// import { useRoutes } from 'react-router-dom'
// import NProgress from '@utils/nprogress'
// import staticRouter from './staticRouter'
// import { useMenuStore } from '@stores/index'
// import { getAuthMenuListApi } from '@api/services/login'
// const dynamicRouter = () => {
//     const [routes, setroute] = useState([]) //接口获取电台路由
//     const { setAuthMenuList } = useMenuStore() // 获取状态
//     // 动态路由
//     //1.NProgress 开始
//     // NProgress.start()

//     useEffect(() => {
//         console.log('==========rendering=======')
//         getAuthMenuList()
//     }, [])

//     const element = useRoutes([
//         ...staticRouter, // 404 页面
//         ...routes,
//     ])

//     const getAuthMenuList = async () => {
//         const { data } = await getAuthMenuListApi()
//         console.log(data, '==')

//         setAuthMenuList(data)
//         const router = data?.map((item: any) => {
//             return {
//                 path: item.path,
//                 element: lazy(() => import(`@pages${item.component}`)),
//                 name: item.name,
//             }
//         })

//         console.log(router, '===router');

//         setroute(router)
//     }

//     return element
// }

/*
 * @Author: yangmiaomiao
 * @Date: 2024-06-21 11:31:07
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-24 19:54:34
 * @Description:
 */
import React, { lazy, useEffect, useState, useMemo } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import NProgress from '@utils/nprogress'
import staticRouter from './staticRouter'
import { useMenuStore } from '@stores/index'
import { getAuthMenuListApi } from '@api/services/login'
import ErrorPage from '@components/ErrorPage'
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))

const DynamicRoutes = () => {
    const location = useLocation() // 用于处理404等
    const { setAuthMenuList, setDynamicRoutes } = useMenuStore() // 获取状态

    const [menuData, setMenuData] = useState<RouteObject[]>([
        ...staticRouter,
        // { path: '/home', element: <Home />, exact: true },
        // { path: '/about', element: <About />, exact: true },
    ])

    useEffect(() => {
        NProgress.start()
        getAuthMenuListApi().then((res) => {
            const data = res.data
            setAuthMenuList(data)
            console.log(data, '==')
            // 处理菜单数据
            const menuList = data.map((item: any) => {
                return {
                    path: item.path,
                    element: React.createElement(lazy(() => import(`@pages${item.component}`))),
                    name: item.name,
                }
            })
            console.log(menuList, 'menuList')

            setMenuData(menuList)
            setDynamicRoutes(menuList)
            // NProgress.done()
        })
    })

    const routes = useMemo(() => {
        return menuData.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
    }, [menuData])

    console.log(routes, 'routes1')

    // 可以添加一个404页面作为兜底
    return (
        <Routes location={location}>
            {routes}
            <Route path='*' element={<ErrorPage />} /> {/* 404 页面 */}
        </Routes>
    )
}
export default DynamicRoutes
