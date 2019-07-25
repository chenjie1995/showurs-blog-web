import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from './service/config.service';
import { LocalStorageService } from './service/local-storage.service';
import { AuthService } from './service/auth.service';
import { HttpService } from './service/http.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ConfigService,
        LocalStorageService,
        AuthService,
        HttpService
    ]
})
export class CoreModule { }