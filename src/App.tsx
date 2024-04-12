/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-09 20:07:30
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-12 17:04:44
 * @Description:
 */

import { FC, Suspense, lazy } from 'react'
import { ConfigProvider, Spin, theme, App } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

dayjs.locale('zh-cn')

const BasicLayout = lazy(() => import('../src/layout'))

const AppMain: FC = () => {
    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                cssVar: true,
                hashed: false,
                components: {
                    Layout: {
                        headerBg: '#04336b',
                        headerColor: '#fff',
                        headerPadding: '0 16px',
                        siderBg: '#fff',
                    },
                },
                // token: {
                //     // colorPrimary: 'blue',
                // },
            }}
        >
            <Suspense fallback={<Spin size='large' />}>
                <App>
                    <BasicLayout />
                </App>
            </Suspense>
        </ConfigProvider>
    )
}

export default AppMain
