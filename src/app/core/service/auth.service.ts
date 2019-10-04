import { Injectable } from '@angular/core';
import { UserToken } from 'src/app/vo/user-token';
import { LocalStorageService } from './local-storage.service';
import { UserAuth } from 'src/app/vo/user-auth';
import { Role } from 'src/app/vo/role';
import { Power } from 'src/app/vo/power';

const tokenKey = 'Authorization';
const rolesKey = 'roles';
const powersKey = 'powers';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userAuth: UserAuth;

    constructor(private localStorageService: LocalStorageService) {
        this.initAuth();
        console.log(this.userAuth);
    }

    login(userToken: UserToken): void {
        this.userAuth.isLogin = true;
        this.userAuth.token = userToken.token;
        this.userAuth.roles = userToken.roles;
        this.userAuth.powers = userToken.powers;
        this.saveAuthInfo(userToken);
        console.log(this.userAuth);
    }

    saveAuthInfo(userToken: UserToken): void {
        this.localStorageService.set(tokenKey, userToken.token);
        this.localStorageService.set(rolesKey, userToken.roles);
        this.localStorageService.set(powersKey, userToken.powers);
    }

    initAuth(): void {
        this.userAuth = new UserAuth();
        const token = this.localStorageService.get<string>(tokenKey);
        const roles = this.localStorageService.getList<Role>(rolesKey);
        const powers = this.localStorageService.getList<Power>(powersKey);
        if (token) {
            this.userAuth.isLogin = true;
            this.userAuth.token = token;
            this.userAuth.roles = roles;
            this.userAuth.powers = powers;
        } else {
            this.userAuth.isLogin = false;
        }
    }
}
