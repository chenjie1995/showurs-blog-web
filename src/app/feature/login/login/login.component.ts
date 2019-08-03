import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/vo/user-login';
import { LoginService } from '../service/login.service';
import { UserToken } from 'src/app/vo/user-token';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLoadingLoginButton: boolean;
    userLogin: FormGroup;
    userToken: UserToken;

    constructor(private loginService: LoginService,
        private message: NzMessageService,
        private router: Router,
        private fb: FormBuilder) {
            this.isLoadingLoginButton = false;
            this.userLogin = this.fb.group({
                username: ['', Validators.required],
                password: ['', Validators.required]
            });
    }

    ngOnInit() {

    }

    login() {
        console.log(this.userLogin.value);
        console.log(this.userLogin.valid);
        // this.isLoadingLoginButton = true;
        // this.loginService.login(this.userLogin.value).subscribe(result => {
        //     this.isLoadingLoginButton = false;
        //     this.userToken = result.data;
        //     this.message.success('登录成功');
        //     this.router.navigateByUrl('home');
        // }, error => {
        //     this.isLoadingLoginButton = false;
        //     this.message.warning(error.message);
        // });
    }
}
