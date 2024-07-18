/*
 * @Author: yangmiaomiao
 * @Date: 2024-06-22 17:21:00
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-22 17:21:06
 * @Description:
 */
import React from 'react'
import * as icons from '@ant-design/icons'

const Icon = (props: { icon: string }) => {
    const { icon } = props
    const antIcon: { [key: string]: any } = icons
    return React.createElement(antIcon[icon])
}

export default Icon
