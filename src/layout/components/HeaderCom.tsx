/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 11:52:26
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-12 16:23:37
 * @Description:
 */
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space, Flex, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useLoginStore } from '@stores/index'

const HeaderCom: React.FC = () => {
    const { userInfo, setUserInfo } = useLoginStore()
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log('退出登录')
        setUserInfo(null)
        navigate('/login')
    }

    const handelPersonalCenter = () => {
        console.log('个人中心')
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <span onClick={handleLogout}>退出登录</span>,
        },
        {
            key: '2',
            label: <span onClick={handelPersonalCenter}>个人中心</span>,
        },
    ]

    return (
        <Flex justify='space-between' align='center'>
            <Space size='middle'>
                <img className='log' src='/logo192.png' alt='' />
                <span className='title'>React+Vite+TS</span>
            </Space>
            <Space size={16}>
                <Dropdown menu={{ items }} arrow>
                    <Avatar size={40} icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
                </Dropdown>
                <span className='user'>{userInfo?.username || 'root'}</span>
            </Space>
        </Flex>
    )
}

export default HeaderCom
