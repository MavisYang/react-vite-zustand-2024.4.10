/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-13 10:48:47
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-26 17:27:16
 * @Description:
 */
import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { NonIndexRouteObject, useNavigate, useLocation, Navigate } from 'react-router-dom'
import MenuCollapsed from '../components/MenuCollapsed'

import { useUserStore, useGlobalStore, useMenuStore } from '@stores/index'
import type { MenuProps } from 'antd'

// import { routes } from '../../router'
// import { router } from '../../App'

const { Sider } = Layout

type IconType = React.ReactElement
type RouteType = NonIndexRouteObject & {
    name: string
    icon: IconType
}

const SiderCom: React.FC = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { userInfo } = useUserStore()
    const { collapsed } = useGlobalStore() //菜单栏收起
    const { router } = useMenuStore() // 获取状态

    useEffect(() => {
        console.log(router, 'router[0]')
        // getAuthMenuList()
    }, [router])

    // const getItems: any = (children: RouteType[]) => {
    //     return children.map((item) => {
    //         return {
    //             key: item.index ? '/' : item.path?.startsWith('/') ? item.path : `/${item.path}`,
    //             // icon: typeof item.icon === 'string' ? React.createElement(item.icon) : item.icon,
    //             label: item.name,
    //             children: item.children ? getItems(item.children) : null,
    //         }
    //     })
    // }

    // console.log(routes, 'routes')
    // console.log(router.routes, 'router')

    // // const menuItems: MenuProps['items'] = getItems(routes[0].children![0].children.filter((item) => item.path !== '*'))
    // // const menuItems: MenuProps['items'] = getItems(routes[0].children.filter((item) => item.path !== '*'))
    // const menuItems: MenuProps['items'] = getItems(router.routes[0].children.filter((item) => item.path !== '*'))

    const onMenuClick: MenuProps['onClick'] = ({ key }) => {
        console.log(key, 'key')
        navigate(key)
    }

    const renderOpenKeys = () => {
        const arr = pathname.split('/').slice(0, -1)
        const result = arr.map((_, index) => '/' + arr.slice(1, index + 1).join('/'))
        return result
    }

    if (!userInfo) {
        return <Navigate to='/login' replace={true} />
    }

    // console.log(menuItems, 'menuItems')

    return (
        <Sider className='m-layout-sider' trigger={null} collapsible collapsed={collapsed}>
            <div className='sider-menus'>
                menu
                {/* <Menu
                    defaultSelectedKeys={[pathname]}
                    defaultOpenKeys={renderOpenKeys()}
                    mode='inline'
                    items={menuItems}
                    onClick={onMenuClick}
                /> */}
            </div>
            <MenuCollapsed text={'收起菜单'} borderTop={true} />
        </Sider>
    )
}

export default SiderCom
