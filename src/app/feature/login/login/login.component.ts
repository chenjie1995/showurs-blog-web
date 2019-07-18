import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/vo/user-login';
import { LoginService } from '../service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoadingLoginButton: boolean = false;

    userLogin: UserLogin = new UserLogin();

    constructor(private loginService: LoginService) { }

    ngOnInit() {
    }

    login() {
        this.isLoadingLoginButton = true;
        this.loginService.login(this.userLogin).subscribe(data => {
            this.isLoadingLoginButton = false;
            
        });
    }

    initValidLogin() {
        // this.ValidLogin = this.formBuilder.group({
        //     username: [null],
        //     password: [null]
        // });
    }

}
