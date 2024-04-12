/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-09 20:07:30
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-11 19:29:13
 * @Description:
 */

import { FC, Suspense, lazy } from 'react'
import { ConfigProvider, Spin, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

dayjs.locale('zh-cn')

const BasicLayout = lazy(() => import('../src/layout'))

console.log(theme, 'theme')

const App: FC = () => {
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
                        siderBg: '#fff',
                    },
                },
                token: {
                    // colorPrimary: 'blue',
                },
            }}
        >
            <Suspense fallback={<Spin size='large' />}>
                <BasicLayout />
            </Suspense>
        </ConfigProvider>
    )
}

export default App
