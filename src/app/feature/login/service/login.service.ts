import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Result } from 'src/app/vo/result';
import { UserLogin } from 'src/app/vo/user-login';
import { UserToken } from 'src/app/vo/user-token';
import { ConfigService } from 'src/app/core/service/config.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private userUrl: string = 'user/users';

    constructor(private http: HttpClient, private configService: ConfigService) { }

    login(userLogin: UserLogin) {
        return this.http.post<Result<UserToken>>(`${this.configService.getApiUrl()}/${this.userUrl}/login`, userLogin);
    }
}
