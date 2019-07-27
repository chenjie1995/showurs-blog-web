import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Result } from 'src/app/vo/result';
import { UserLogin } from 'src/app/vo/user-login';
import { UserToken } from 'src/app/vo/user-token';
import { ConfigService } from 'src/app/core/service/config.service';
import { HttpService } from 'src/app/core/service/http.service';

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
            .pipe(retry(1), catchError(this.httpService.handleError));
    }
}
