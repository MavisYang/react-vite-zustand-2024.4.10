/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 09:38:52
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-24 16:14:05
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
            <svg>
                <use xlink:href='#smile-o' />
            </svg>
        </div>
    )
}

export default Home
