import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/vo/user-login';
import { LoginService } from '../service/login.service';
import { UserToken } from 'src/app/vo/user-token';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoadingLoginButton: boolean;

    userLogin: UserLogin;

    userToken: UserToken;

    constructor(private loginService: LoginService,
        private message: NzMessageService,
        private router: Router) {
        this.isLoadingLoginButton = false;
        this.userLogin = new UserLogin();
    }

    ngOnInit() {
    }

    login() {
        this.isLoadingLoginButton = true;
        this.loginService.login(this.userLogin).subscribe(result => {
            this.isLoadingLoginButton = false;
            this.userToken = result.data;
            this.message.success('登录成功');
            this.router.navigateByUrl('home');
        }, error => {
            this.isLoadingLoginButton = false;
            this.message.warning(error.message);
        });
    }

    initValidLogin() {
        // this.ValidLogin = this.formBuilder.group({
        //     username: [null],
        //     password: [null]
        // });
    }

}
