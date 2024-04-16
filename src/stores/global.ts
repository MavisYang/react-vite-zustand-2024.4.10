/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:04:20
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-15 20:09:01
 * @Description:
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GlobalState {
    collapsed: boolean //菜单栏收起状态
    setCollapsed: (collapsed: boolean) => void

    primaryColor: string
    setColor: (color: string) => void
}

const useGlobalStore = create<GlobalState>()(
    persist(
        (set) => ({
            primaryColor: '#247fff',
            setColor: (color) => set(() => ({ primaryColor: color })),

            collapsed: false,
            setCollapsed: (collapsed) => set(() => ({ collapsed: collapsed })),
        }),
        {
            name: 'global',
        },
    ),
)

export default useGlobalStore
