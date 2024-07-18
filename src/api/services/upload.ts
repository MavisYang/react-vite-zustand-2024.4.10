/*
 * @Author: yangmiaomiao
 * @Date: 2024-02-04 14:41:55
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-16 10:46:09
 * @Description:
 */
import { Upload } from '@api/interface/index'
import http from '@api/index'

/**
 * @name 文件上传模块
 */
// 图片上传
export const uploadImg = (params: FormData) => {
    return http.post<Upload.ResFileUrl>(`/file/upload/img`, params, { cancel: false })
}

// 视频上传
export const uploadVideo = (params: FormData) => {
    return http.post<Upload.ResFileUrl>(`/file/upload/video`, params, { cancel: false })
}
