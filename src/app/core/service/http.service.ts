import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ErrorInfo } from 'src/app/vo/error-info';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor() { }

    handleError(error: HttpErrorResponse) {
        console.log(error);
        const errorInfo = new ErrorInfo();
        if (error.error instanceof ErrorEvent) {
            // 客户端和网络错误
            errorInfo.code = 400;
            errorInfo.message = '客户端和网络错误😮';
            console.error(`客户端和网络错误: ${error.error.message}`);
        } else if (error.error instanceof ProgressEvent) {
            // 可能出现网络故障
            errorInfo.code = 0;
            errorInfo.message = '请检查网络连接🙄';
            console.error(error.message);
        } else if (error.error.code && error.error.message) {
            // 服务端返回错误代码.
            errorInfo.code = error.error.code;
            errorInfo.message = error.error.message;
            console.error(`请求出错, http status: ${error.status}, code: ${error.error.code}, message: ${error.error.message}`);
        } else {
            // 服务端可能出现的未控制错误.
            switch (error.status) {
                case 404:
                    errorInfo.code = error.status;
                    errorInfo.message = '好像没有找到😒';
                    break;
                case 500:
                    errorInfo.code = error.status;
                    errorInfo.message = '服务器开小差了😂';
                    break;
                default:
                    errorInfo.code = error.status;
                    errorInfo.message = '未知的异常🤔';
                    break;
            }
            console.error(error.message);
        }
        // return an observable with a user-facing error message
        return throwError(errorInfo);
    }
}
