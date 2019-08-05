import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/service/config.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const userUrl: string = 'user/users';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    passwordVisible: boolean;
    isLoadingRegisterButton: boolean;
    captchaUrl: string;
    userRegister: FormGroup;

    constructor(private configService: ConfigService,
        private fb: FormBuilder) {
        this.passwordVisible = true;
        this.isLoadingRegisterButton = false;
        this.captchaUrl = `${this.configService.getApiUrl()}/${userUrl}/captcha-image`;
        this.userRegister = this.fb.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            captcha: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }

    register() {

    }
}
