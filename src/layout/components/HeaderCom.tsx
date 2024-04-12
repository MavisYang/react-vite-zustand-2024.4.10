/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 11:52:26
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-12 08:52:30
 * @Description:
 */
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space, Flex } from 'antd'

const HeaderCom: React.FC = () => {
    return (
        <Flex justify='space-between' align='center'>
            <Space size={30} className='header-left'>
                <span className='log'>log</span>
                <span className='title'>title</span>
            </Space>
            <Space className='header-right'>
                <span className='user'>user</span>
                <Avatar size={40} icon={<UserOutlined />} />
            </Space>
        </Flex>
    )
}

export default HeaderCom
