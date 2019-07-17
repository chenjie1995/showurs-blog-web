import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/service/config.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    isLoadingRegisterButton: boolean = false;

    constructor(private configService: ConfigService) { 
    }

    ngOnInit() {
    }

}
