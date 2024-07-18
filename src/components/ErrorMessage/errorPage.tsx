/*
 * @Author: yangmiaomiao
 * @Date: 2024-06-26 14:27:09
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-26 14:27:15
 * @Description:
 */
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
    const error = useRouteError() as any

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage
