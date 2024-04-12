/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:01:23
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-11 19:37:59
 * @Description:
 */
import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'

import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
// import Header from './modules/Header'
// import Content from './modules/Content'
import HeaderCom from './components/HeaderCom'
import './index.scss'
import { Button } from 'antd'

const { Header, Content, Sider } = Layout

const BasicLayout: React.FC = () => {
    return (
        <Layout className='m-layout-container'>
            <Header className='m-layout-header'>
                <HeaderCom />
            </Header>
            <Layout className='m-layout-main'>
                <Sider className='m-layout-sider' trigger={null} collapsible collapsed={false}>
                    Sider
                </Sider>
                <Content className='m-layout-content'>
                    Content
                    <Button>Button</Button>
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
