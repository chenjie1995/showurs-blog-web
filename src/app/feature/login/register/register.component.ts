import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/service/config.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormService } from 'src/app/core/service/form.service';

const userUrl: string = 'user/users';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    isLoadingRegisterButton: boolean;
    captchaUrl: string;
    userRegister: FormGroup;

    constructor(private configService: ConfigService,
        private fb: FormBuilder,
        private formService: FormService) {
        this.isLoadingRegisterButton = false;
        this.captchaUrl = `${this.configService.getApiUrl()}/${userUrl}/captcha-image`;
        this.userRegister = this.fb.group({
            username: ['', [Validators.required, Validators.maxLength(18)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.maxLength(18)]],
            confirmPassword: ['', [Validators.required, Validators.maxLength(18), this.confirmValidator]],
            captcha: ['', [Validators.required, Validators.maxLength(6)]]
        });
    }

    ngOnInit() {
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
            console.log('1234');
        } else {
            this.formService.showValidInfo(this.userRegister);
        }
    }
}
