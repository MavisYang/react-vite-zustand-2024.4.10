/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 09:38:52
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-16 09:56:58
 * @Description:
 */

import React from 'react'
import { Button } from 'antd'
import Icon, { HomeOutlined } from '@ant-design/icons'
import IconFont from '@components/IconFont'

const Home: React.FC = () => {
    return (
        <div>
            home
            <IconFont type='icon-userAddOutlined' />
            <IconFont type='icon-check-circle' style={{ fontSize: '30px', color: 'red' }} />
            <IconFont type='icon-home' />
            <IconFont type='icon-right-circle' />
            <Icon component={HomeOutlined as React.ForwardRefExoticComponent<any>} />
            <Button>Button</Button>
        </div>
    )
}

export default Home
