import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/service/config.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    appName: string;
    logined: boolean;

    constructor(private configService: ConfigService,
        private authService: AuthService) {
    }

    ngOnInit() {
        this.appName = this.configService.getAppName();
        this.logined = this.authService.isLogin();
    }
    
}
