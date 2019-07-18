import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './service/config.service';
import { LocalStorageService } from './service/local-storage.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ConfigService,
        LocalStorageService
    ]
})
export class CoreModule { }