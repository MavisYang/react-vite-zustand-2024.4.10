/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:01:23
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-26 17:25:43
 * @Description:
 */
import React, { lazy, Suspense, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import dayjs from 'dayjs'
import HeaderCom from './modules/HeaderCom'
import SiderCom from './modules/SiderCom'
import ContentCom from './modules/ContentCom'
import Result404 from '@components/ErrorMessage/404'
import { getAuthMenuListApi } from '@api/services/login'
import { useUserStore, useMenuStore } from '@stores/index'
import { components } from '@utils/routesConfig'
import { router, replaceRoutes } from '../router/index'
import './index.scss'

dayjs.locale('zh-cn')

const VITE_LOGIN_URL = import.meta.env.VITE_LOGIN_URL
const modules = import.meta.glob('./pages/**/index.tsx') // 使用import.meta.glob导入所有pages子目录下的index.tsx文件

const BasicLayout: React.FC = () => {
    const { token } = useUserStore()
    const { setAuthMenuList, setDynamicRouter } = useMenuStore()
    const navigate = useNavigate()
    // 获取路由列表

    useEffect(() => {
        // 判断是否登录
        if (!token) {
            navigate(VITE_LOGIN_URL)
            return
        }
        getMenusList()
    }, [token, navigate])

    useEffect(() => {})

    // 获取菜单
    const getMenusList = async () => {
        const { data } = await getAuthMenuListApi()
        setAuthMenuList(data) //存储原始菜单数据

        // const routes: Menu[] = []
        const routes = data

        replaceRoutes('*', [
            ...routes.map((menu) => {
                return {
                    path: `/*${menu.path}`,
                    Component: menu.component ? lazy(components[menu.component]) : null,
                    id: `/*${menu.path}`,
                    handle: {
                        path: menu.path,
                        name: menu.name,
                        icon: menu.icon,
                    },
                }
            }),
            {
                id: '*',
                path: '*',
                Component: Result404,
                handle: {
                    path: '404',
                    name: '404',
                },
            },
        ])
        setDynamicRouter(routes)
    }

    // replace一下当前路由，为了触发路由匹配
    router.navigate(`${location.pathname}${location.search}`, { replace: true })

    return (
        <Suspense fallback={<Spin size='large' />}>
            <Layout className='m-layout-container'>
                <HeaderCom />
                <Layout className='m-layout-main'>
                    <SiderCom />
                    <ContentCom />
                </Layout>
            </Layout>
        </Suspense>
    )
}

export default BasicLayout
