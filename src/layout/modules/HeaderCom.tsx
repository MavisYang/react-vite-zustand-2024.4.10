/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 11:52:26
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-21 10:45:52
 * @Description:
 */
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Layout, Avatar, Space, Flex, Dropdown } from 'antd'
import type { MenuProps } from 'antd'

import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@stores/index'

const { Header } = Layout

const HeaderCom: React.FC = () => {
    const { userInfo, setUserInfo } = useUserStore()
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log('退出登录')
        setUserInfo(null)
        navigate('/login')
    }

    // const handelPersonalCenter = () => {
    //     console.log('个人中心')
    // }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <span onClick={handleLogout}>退出登录</span>,
        },
        // {
        //     key: '2',
        //     label: <span onClick={handelPersonalCenter}>个人中心</span>,
        // },
    ]

    return (
        <Header className='m-layout-header'>
            <Flex justify='space-between' align='center' style={{ height: '100%' }}>
                <Space size='middle'>
                    <img className='log' src='/logo192.png' alt='' />
                    <span className='title'>React+Vite+TS</span>
                </Space>
                <Space size={16}>
                    <span className='user'>{userInfo?.username || 'root'}</span>
                    <Dropdown menu={{ items }} arrow>
                        <Avatar style={{ cursor: 'pointer' }} size={40} icon={<UserOutlined />} />
                    </Dropdown>
                </Space>
            </Flex>
        </Header>
    )
}

export default HeaderCom
