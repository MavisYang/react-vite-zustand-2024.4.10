/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:04:08
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-15 19:44:07
 * @Description:
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware' //持久化中间件

type Info = Record<string, any> | null
type Token = string | null
interface LoginState {
    userInfo: Info
    token: Token
    setUserInfo: (info: Info) => void
}
const useLoginStore = create<LoginState>()(
    persist(
        (set) => ({
            userInfo: null,
            setUserInfo: (info) => set({ userInfo: info }),
            token: null,
            setToken: (token: Token) => set(() => ({ token: token })),
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
