import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './service/config.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ConfigService
    ]
})
export class CoreModule { }