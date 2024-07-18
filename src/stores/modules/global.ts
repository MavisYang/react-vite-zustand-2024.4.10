/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:04:20
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-26 11:41:16
 * @Description:
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
    collapsed: boolean //菜单栏收起状态
    lang: string
    primaryColor: string
}

interface Action {
    setCollapsed: (collapsed: State['collapsed']) => void
    setLang: (lang: State['lang']) => void
    setColor: (color: State['primaryColor']) => void
}
const useGlobalStore = create<State & Action>()(
    persist(
        (set, get) => ({
            primaryColor: '#247fff',
            setColor: (color) => set(() => ({ primaryColor: color })),

            collapsed: false,
            setCollapsed: (collapsed) => set(() => ({ collapsed })),

            lang: 'zh',
            setLang: (lang: State['lang']) => set({ lang }),
            // action: () => {
            //     // 使用 get()
            //     const userLang = get().lang
            //     // ...
            // },
        }),
        {
            name: 'global',
        },
    ),
)

export default useGlobalStore
