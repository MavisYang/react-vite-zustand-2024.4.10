/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-11 11:28:17
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-21 16:13:49
 * @Description:
 */
import { FC, useEffect } from 'react'
import { App } from 'antd'

const About: FC = () => {
    // console.log(App.useApp())
    const { message } = App.useApp()

    useEffect(() => {
        message.success('about')
    }, [])

    return <div onClick={() => message.success('message111')}>About</div>
}

export default About
