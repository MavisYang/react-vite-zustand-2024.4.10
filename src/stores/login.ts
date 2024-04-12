/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:04:08
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-12 11:05:23
 * @Description:
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware' //持久化中间件

type Info = Record<string, any> | null
interface LoginState {
    userInfo: Info
    token: string | null
    setUserInfo: (info: Info) => void
}
const useLoginStore = create<LoginState>()(
    persist(
        (set, get) => ({
            userInfo: null,
            token: null,
            setUserInfo: (info) => set({ userInfo: info }),
        }),
        {
            name: 'userInfo', // 唯一键
            storage: createJSONStorage(() => sessionStorage), // (可选)默认使用'localStorage'

            // //过滤属性，存储某些字段到Storage You could omit multiple fields using the following
            // partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => key !== 'userInfo')), //userInfo字段不被存储，其他字段被存储
            // //存储特定字段的值 you could allow only specific fields using the following
            // // partialize: (state) => ({ userInfo: state.userInfo }),
        },
    ),
)

export default useLoginStore
