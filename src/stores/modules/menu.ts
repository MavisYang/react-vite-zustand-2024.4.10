/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-10 14:04:20
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-26 17:24:45
 * @Description:
 */
import { create } from 'zustand'
interface State {
    router: [] //路由列表
    authMenuList: [] // 菜单列表
}

interface Action {
    setDynamicRouter: (data: any) => void
    setAuthMenuList: (data: any) => void
}

const useMenuStore = create<State & Action>((set, get) => ({
    router: [],
    setDynamicRouter: (router: any) => set(router),
    authMenuList: [],
    setAuthMenuList: (authMenuList: any) => set(authMenuList),
}))

export default useMenuStore
