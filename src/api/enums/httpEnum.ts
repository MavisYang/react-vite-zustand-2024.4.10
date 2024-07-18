/*
 * @Author: yangmiaomiao
 * @Date: 2024-02-04 09:38:15
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-03-25 15:30:01
 * @Description:
 */
/**
 * @description：请求配置
 */
export enum ResultEnum {
    // SUCCESS = 200,
    SUCCESS = 'H2001',
    ERROR = 500,
    OVERDUE = 401,
    TIMEOUT = 30000, //30s
    TYPE = 'success',
}

/**
 * @description：请求方法
 */
export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

/**
 * @description：常用的 contentTyp 类型
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // text
    TEXT = 'text/plain;charset=UTF-8',
    // form-data 一般配合qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data 上传
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
