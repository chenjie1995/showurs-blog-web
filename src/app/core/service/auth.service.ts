import { Injectable } from '@angular/core';
import { UserToken } from 'src/app/vo/user/user-token';
import { LocalStorageService } from './local-storage.service';
import { UserAuth } from 'src/app/vo/user/user-auth';
import { User } from 'src/app/vo/user/user';

const tokenKey = 'Authorization';
const userKey = 'user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userAuth: UserAuth;

    constructor(private localStorageService: LocalStorageService) {
        this.initAuth();
        console.log(this.userAuth);
    }

    initAuth(): void {
        this.userAuth = new UserAuth();
        const token = this.localStorageService.get<string>(tokenKey);
        const user = this.localStorageService.get<User>(userKey);
        if (token) {
            this.userAuth.isLogin = true;
            this.userAuth.token = token;
            this.userAuth.user = user;
        } else {
            this.userAuth.isLogin = false;
        }
    }

    login(userToken: UserToken): void {
        this.userAuth.isLogin = true;
        this.userAuth.token = userToken.token;
        this.userAuth.user = userToken.user;
        this.saveAuthInfo(userToken);
    }

    saveAuthInfo(userToken: UserToken): void {
        this.localStorageService.set(tokenKey, userToken.token);
        this.localStorageService.set(userKey, userToken.user);
    }

    isLogin(): boolean {
        return this.userAuth.isLogin;
    }

    getToken(): string {
        return this.userAuth.token;
    }

    getUser(): User {
        return this.userAuth.user;
    }
}
