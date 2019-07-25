import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Result } from 'src/app/vo/result';
import { UserLogin } from 'src/app/vo/user-login';
import { UserToken } from 'src/app/vo/user-token';
import { ConfigService } from 'src/app/core/service/config.service';

const userUrl: string = 'user/users';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private configService: ConfigService) { }

    login(userLogin: UserLogin) {
        return this.http.post<Result<UserToken>>(`${this.configService.getApiUrl()}/${userUrl}/login`, userLogin).pipe(retry(3));
    }
}
