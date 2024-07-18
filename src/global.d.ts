/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-12 10:00:48
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-21 14:53:55
 * @Description:
 */
declare module '*.less' {
    const style: any
    export default style
}
declare module '*.scss' {
    const style: any
    export default style
}

declare module '*.css'
declare module '*.less'
declare module '*.sass'
declare module '*.svg'
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'faker'

/* Vite */
declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
    VITE_APP_MODE: 'development' | 'production' | 'test'
    VITE_PUBLIC_PATH: string
    VITE_DROP_CONSOLE: boolean
    VITE_API_URL: string
    VITE_GLOB_APP_TITLE: string
    VITE_PORT: number
    VITE_OPEN: boolean
    VITE_HOME_URL: string
    VITE_PRIMARY_COLOR: string
}
