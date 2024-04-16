/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-16 09:26:42
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-16 09:52:15
 * @Description:
 */
import { createFromIconfontCN } from '@ant-design/icons'

/**
 * scriptUrl ：自定义阿里巴巴矢量图，有修改可替换此处的scriptUrl地址，或者添加
 * <IconFont type='icon-home' style={{ fontSize: '30px', color: 'red' }} />
 *
 */
const IconFont = createFromIconfontCN({
    scriptUrl: ['//at.alicdn.com/t/c/font_4509184_deggbs0wcka.js', '//at.alicdn.com/t/c/font_554360_e1ysae7xv2b.js'],
})

export default IconFont
