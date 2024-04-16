/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-13 10:48:47
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-16 09:58:54
 * @Description:
 */
import React from 'react'
import { Layout, Menu } from 'antd'
import { NonIndexRouteObject, useNavigate, useLocation, Navigate } from 'react-router-dom'
import MenuCollapsed from '../components/MenuCollapsed'

import { useLoginStore, useGlobalStore } from '@stores/index'
import { routes } from '../../routers'
import type { MenuProps } from 'antd'

const { Sider } = Layout

type IconType = React.ReactElement | string
type RouteType = NonIndexRouteObject & {
    name: string
    icon: IconType
}

const SiderCom: React.FC = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { userInfo } = useLoginStore()
    const { collapsed } = useGlobalStore() //菜单栏收起

    const getItems: any = (children: RouteType[]) => {
        return children.map((item) => {
            return {
                key: item.index ? '/' : item.path?.startsWith('/') ? item.path : `/${item.path}`,
                icon: item.icon,
                label: item.name,
                children: item.children ? getItems(item.children) : null,
            }
        })
    }

    const menuItems: MenuProps['items'] = getItems(routes[0].children![0].children.filter((item) => item.path !== '*'))

    const onMenuClick: MenuProps['onClick'] = ({ key }) => {
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

    console.log(menuItems, 'menuItems')

    return (
        <Sider className='m-layout-sider' trigger={null} collapsible collapsed={collapsed}>
            <div className='sider-menus'>
                <Menu
                    defaultSelectedKeys={[pathname]}
                    defaultOpenKeys={renderOpenKeys()}
                    mode='inline'
                    items={menuItems}
                    onClick={onMenuClick}
                />
            </div>
            <MenuCollapsed text={'收起菜单'} borderTop={true} />
        </Sider>
    )
}

export default SiderCom
