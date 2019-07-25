import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/vo/user-login';
import { LoginService } from '../service/login.service';
import { UserToken } from 'src/app/vo/user-token';
import { Result } from 'src/app/vo/result';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoadingLoginButton: boolean;

    userLogin: UserLogin;

    userToken: UserToken;

    constructor(private loginService: LoginService) {
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
            console.log(this.userToken.token);
        }, error => {
            
        });
    }

    initValidLogin() {
        // this.ValidLogin = this.formBuilder.group({
        //     username: [null],
        //     password: [null]
        // });
    }

}
