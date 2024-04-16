/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:01:23
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-15 20:00:50
 * @Description:
 */
import React from 'react'
import { Layout } from 'antd'
import HeaderCom from './modules/HeaderCom'
import SiderCom from './modules/SiderCom'
import ContentCom from './modules/ContentCom'
import './index.scss'

const BasicLayout: React.FC = () => {
    return (
        <Layout className='m-layout-container'>
            <HeaderCom />
            <Layout className='m-layout-main'>
                <SiderCom />
                <ContentCom />
            </Layout>
        </Layout>
    )
}

export default BasicLayout
