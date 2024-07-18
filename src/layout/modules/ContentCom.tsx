/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-13 15:36:53
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-22 16:52:39
 * @Description:
 */
import { Suspense } from 'react'
import { Layout, Spin } from 'antd'
import { Outlet, useLoaderData } from 'react-router-dom'
import NoAuthPage from '@components/NoAuthPage'
const { Content } = Layout
const ContentCom = () => {
    // const { isAdmin } = useLoaderData() as any
    return (
        <Content className='m-layout-content'>
            <Suspense fallback={<Spin size='large' className='content_spin' />}>
                <Outlet />
            </Suspense>
            {/* {isAdmin ? (
                <Suspense fallback={<Spin size='large' className='content_spin' />}>
                    <Outlet />
                </Suspense>
            ) : (
                <NoAuthPage />
            )} */}
        </Content>
    )
}

export default ContentCom
