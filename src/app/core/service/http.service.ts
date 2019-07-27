import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Result } from 'src/app/vo/result';
import { ErrorInfo } from 'src/app/vo/error-info';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor() { }

    handleError(error: HttpErrorResponse) {
        const errorInfo = new ErrorInfo();
        if (error.error instanceof ErrorEvent) {
            // 客户端和网络错误
            errorInfo.code = 400;
            errorInfo.message = '客户端和网络错误';
            console.error(`An error occurred: ${error.error.message}`);
        } else if (error.error.code && error.error.message) {
            // 服务端返回错误代码.
            errorInfo.code = error.error.code;
            errorInfo.message = error.error.message;
            console.error(`http status: ${error.status}, code: ${error.error.code}, message: ${error.error.message}`);
        } else {
            // 服务端可能出现的未控制错误.
            switch (error.status) {
                case 400:
                    errorInfo.code = error.status;
                    errorInfo.message = '🤨请求可能被吃了';
                    break;
                case 404:
                    errorInfo.code = error.status;
                    errorInfo.message = '😒好像没有找到';
                    break;
                case 500:
                    errorInfo.code = error.status;
                    errorInfo.message = '😂服务器开小差了';
                    break;
                default:
                    errorInfo.code = error.status;
                    errorInfo.message = '🤔未知的异常';
                    break;
            }
        }
        // return an observable with a user-facing error message
        return throwError(errorInfo);
    }
}
