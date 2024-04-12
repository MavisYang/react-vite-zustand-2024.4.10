/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-12 11:16:57
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-12 17:33:58
 * @Description:
 */
import React, { useState } from 'react'
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {
    ProConfigProvider,
    LoginFormPage,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components'
import { message, Tabs, Button } from 'antd'
import type { TabsProps } from 'antd'
import { useLoginStore } from '@stores/index'
import './index.scss'

type LoginType = 'phone' | 'account'
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const Login: React.FC = () => {
    const [loginType, setLoginType] = useState<LoginType>('account')
    const { setUserInfo } = useLoginStore()
    const navigate = useNavigate() //路由跳转
    const [messageApi, contextHolder] = message.useMessage()

    const handleSubmit = async (values: any) => {
        setUserInfo(values)
        messageApi
            .success({
                key: 'loginSuccess',
                content: '登录成功',
                duration: 0.8,
            })
            .then(() => {
                navigate('/', { replace: true })
                // 指定 replace: true 会导致导航替换历史堆栈中的当前条目，而不是添加新条目。
            })
        // return await delay(1000).then(() => {
        //     setUserInfo(values)
        //     // navigate('/', { replace: true })
        //     // message.success('登录成功🎉🎉🎉')
        //     // 直接用这个方法是报错

        //     // 这种方式跳转太慢了
        //     messageApi
        //         .success({
        //             key: 'loginSuccess',
        //             content: '登录成功',
        //             duration: 0.8,
        //         })
        //         .then(() => {
        //             navigate('/', { replace: true })
        //             // 指定 replace: true 会导致导航替换历史堆栈中的当前条目，而不是添加新条目。
        //         })
        // })
    }

    const tabPane: TabsProps['items'] = [
        { key: 'account', label: '账号密码登录' },
        { key: 'phone', label: '手机号登录' },
    ]

    return (
        <ProConfigProvider hashed={false}>
            <div
                style={{
                    backgroundColor: 'white',
                    height: '100vh',
                }}
            >
                {contextHolder}
                <LoginFormPage
                    backgroundImageUrl='https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png'
                    logo='/logo192.png'
                    onFinish={handleSubmit as any}
                    title='react-admin'
                    subTitle='学习搭建的react后台管理系统'
                >
                    <Tabs
                        centered
                        items={tabPane}
                        activeKey={loginType}
                        onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                    />

                    {loginType === 'account' && (
                        <>
                            <ProFormText
                                name='username'
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'用户名: admin or user'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name='password'
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'密码: 123456'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码！',
                                    },
                                ]}
                            />
                        </>
                    )}
                    {loginType === 'phone' && (
                        <>
                            <ProFormText
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MobileOutlined className={'prefixIcon'} />,
                                }}
                                name='mobile'
                                placeholder={'手机号'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入手机号！',
                                    },
                                    {
                                        pattern: /^1\d{10}$/,
                                        message: '手机号格式错误！',
                                    },
                                ]}
                            />
                            <ProFormCaptcha
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                }}
                                captchaProps={{
                                    size: 'large',
                                }}
                                placeholder={'请输入验证码'}
                                captchaTextRender={(timing, count) => {
                                    if (timing) {
                                        return `${count} ${'获取验证码'}`
                                    }
                                    return '获取验证码'
                                }}
                                name='captcha'
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入验证码！',
                                    },
                                ]}
                                onGetCaptcha={async () => {
                                    message.success('获取验证码成功！验证码为：1234')
                                }}
                            />
                        </>
                    )}
                    <div style={{ marginBlockEnd: 24 }}>
                        <ProFormCheckbox noStyle name='autoLogin'>
                            自动登录
                        </ProFormCheckbox>
                        <a style={{ float: 'right' }}>忘记密码</a>
                    </div>
                </LoginFormPage>
            </div>
        </ProConfigProvider>
    )
}

export default Login
