// /*
//  * @Author: yangmiaomiao
//  * @Date: 2024-04-16 10:36:35
//  * @LastEditors: yangmiaomiao
//  * @LastEditTime: 2024-06-21 09:36:04
//  * @Description:
//  */

// import { message } from 'antd'
// import I18n from '@/languages/index'
// const { t } = I18n.global
// /**
//  * @description: 校验网络请求状态码
//  * @param {Number} status
//  * @return void
//  */
// export const checkStatus = (status: number, msg: string) => {
//     switch (status) {
//         case 400:
//             // "请求失败！请您稍后重试";
//             message.error(`${t('axios.error_Code')}【${status}】${msg ? msg : t(`axios.error_${status}`)}`)
//             break
//         case 401:
//             // message.error("登录失效！请您重新登录");
//             message.error(msg ? msg : '用户名或密码错误，请重试')
//             break
//         case 403:
//             message.error('当前账号无权限访问！')
//             break
//         case 404:
//             // 你所访问的资源不存在！
//             message.error(`${t('axios.error_Code')}【${status}】${msg ? msg : t(`axios.error_${status}`)}`)
//             break
//         case 405:
//             // 请求方式错误！请您稍后重试
//             message.error(`${t('axios.error_Code')}【${status}】${msg ? msg : t(`axios.error_${status}`)}`)
//             break
//         case 408:
//             // 请求超时！请您稍后重试
//             message.error(`${t('axios.error_Code')}【${status}】${msg ? msg : t(`axios.error_${status}`)}`)
//             break
//         case 500:
//             // 服务异常！
//             message.error(`${t('axios.error_Code')}【${status}】${msg ? msg : t(`axios.error_${status}`)}`)
//             break
//         case 502:
//             message.error('网关错误！')
//             break
//         case 503:
//             message.error('服务不可用！')
//             break
//         case 504:
//             message.error('网关超时！')
//             break
//         default:
//             // message.error("请求失败！");
//             message.error(`${t('axios.error_Code')}【${status}】${msg ? msg : t(`axios.error_${status}`)}`)
//     }
// }
