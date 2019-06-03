import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/vo/user-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private isLoadingLoginButton: boolean = false;

    private userLogin: UserLogin = {username: '', password: ''};

    constructor() { }

    ngOnInit() {
    }

}
