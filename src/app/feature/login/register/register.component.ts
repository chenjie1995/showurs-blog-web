import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/service/config.service';

const userUrl: string = 'user/users';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    isLoadingRegisterButton: boolean = false;
    captchaUrl: string = `${this.configService.getApiUrl()}/${userUrl}/captcha-image`;

    constructor(private configService: ConfigService) { 
    }

    ngOnInit() {
    }

}
