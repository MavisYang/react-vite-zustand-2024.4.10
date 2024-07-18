/*
 * @Author: yangmiaomiao
 * @Date: 2024-06-26 11:47:05
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-26 17:29:42
 * @Description:
 */
import i18n from 'i18next'
import enUS from '@assets/locales/en'
import zhCN from '@assets/locales/zh'
import { useGlobalStore } from '@stores/index'

const { lang } = useGlobalStore()

i18n.init({
    resources: {
        en: {
            translation: enUS,
        },
        zh: {
            translation: zhCN,
        },
    },
    lng: lang || 'zh',
    fallbackLng: lang || 'zh',
    interpolation: {
        escapeValue: false,
    },
})

export const t = (key: string) => {
    return i18n.t(key) || key
}

export { i18n }
