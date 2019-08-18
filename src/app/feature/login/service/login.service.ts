import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { Result } from 'src/app/vo/result';
import { UserLogin } from 'src/app/vo/user-login';
import { UserToken } from 'src/app/vo/user-token';
import { ConfigService } from 'src/app/core/service/config.service';
import { HttpService } from 'src/app/core/service/http.service';
import { UserRegister } from 'src/app/vo/user-register';

const userUrl = 'user/users';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient,
        private configService: ConfigService,
        private httpService: HttpService) { }

    login(userLogin: UserLogin) {
        return this.httpClient.post<Result<UserToken>>(`${this.configService.getApiUrl()}/${userUrl}/login`, userLogin)
            .pipe(catchError(this.httpService.handleError));
    }

    register(captchaKey: string, userRegister: UserRegister) {
        return this.httpClient.post<Result<UserToken>>(`${this.configService.getApiUrl()}/${userUrl}/register`, userRegister,
            { headers: { 'CaptchaKey': captchaKey } }).pipe(catchError(this.httpService.handleError));
    }

    // getCaptcha(width?: number, height?: number) {
    //     return this.httpClient.get(`${this.configService.getApiUrl()}/${userUrl}/captcha-image`, {
    //         observe: 'response',
    //         responseType: 'blob',
    //         params: { 'width': width?String(width):'', 'height': height?String(height):'' }
    //     }).pipe(retry(1), catchError(this.httpService.handleError));
    // }
}
