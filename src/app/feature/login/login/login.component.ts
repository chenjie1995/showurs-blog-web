import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/vo/user-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private isLoadingLoginButton: boolean = false;

    private userLogin: UserLogin = new UserLogin();

    constructor() { }

    ngOnInit() {
    }

    login() {
        this.isLoadingLoginButton = true;
        console.log(this.userLogin);
    }

    initValidLogin() {
        // this.ValidLogin = this.formBuilder.group({
        //     username: [null],
        //     password: [null]
        // });
    }

}
