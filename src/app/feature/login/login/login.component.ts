import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../service/login.service';
import { UserToken } from 'src/app/vo/user-token';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/service/form.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLoadingLoginButton: boolean;
    passwordVisible: boolean;
    userLogin: FormGroup;
    userToken: UserToken;

    constructor(private loginService: LoginService,
        private fromService: FormService,
        private message: NzMessageService,
        private router: Router,
        private fb: FormBuilder) {
    }

    ngOnInit() {
        this.isLoadingLoginButton = false;
        this.passwordVisible = false;
        this.userLogin = this.fb.group({
            username: ['', [Validators.required, Validators.maxLength(18)]],
            password: ['', [Validators.required, Validators.maxLength(18)]]
        });
    }

    login() {
        if (this.userLogin.valid) {
            this.isLoadingLoginButton = true;
            this.loginService.login(this.userLogin.value).subscribe(result => {
                this.isLoadingLoginButton = false;
                this.userToken = result.data;
                this.message.success('登录成功');
                this.router.navigateByUrl('home');
            }, error => {
                this.isLoadingLoginButton = false;
                this.message.warning(error.message);
            });
        } else {
            this.fromService.showValidInfo(this.userLogin);
        }
    }
}
