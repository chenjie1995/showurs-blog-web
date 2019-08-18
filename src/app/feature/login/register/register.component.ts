import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/service/config.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormService } from 'src/app/core/service/form.service';
import { LoginService } from '../service/login.service';
import { NzMessageService } from 'ng-zorro-antd';
import { UtilService } from 'src/app/core/service/util.service';

const userUrl = 'user/users';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    isLoadingRegisterButton: boolean;
    captchaUrl: string;
    captchaKey: string;
    userRegister: FormGroup;

    constructor(private configService: ConfigService,
        private fb: FormBuilder,
        private formService: FormService,
        private loginService: LoginService,
        private message: NzMessageService,
        private utilService: UtilService) {
    }

    ngOnInit() {
        this.changeCaptcha();
        this.isLoadingRegisterButton = false;
        this.userRegister = this.fb.group({
            username: ['', [Validators.required, Validators.maxLength(18)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]],
            confirmPassword: ['', [Validators.required, Validators.maxLength(18), this.confirmValidator]],
            captcha: ['', [Validators.required, Validators.maxLength(4)]]
        });
    }

    confirmValidator = (control: FormControl): { [name: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.userRegister.controls.password.value) {
            return { confirm: true, error: true };
        }
        return {};
    };

    register() {
        if (this.userRegister.valid) {
            this.registerBefore();
            this.loginService.register(this.captchaKey, this.userRegister.value).subscribe(result => {
                console.log(result);
                this.registerAfter();
            }, error => {
                this.message.warning(error.message);
                this.registerAfter();
            });
        } else {
            this.formService.showValidInfo(this.userRegister);
        }
    }

    registerBefore() {
        this.isLoadingRegisterButton = true;
    }

    registerAfter() {
        this.isLoadingRegisterButton = false;
        this.changeCaptcha();
    }

    changeCaptcha() {
        this.captchaKey = this.utilService.getUUID();
        this.captchaUrl = `${this.configService.getApiUrl()}/${userUrl}/captcha-image?key=${this.captchaKey}`;
    }
}
