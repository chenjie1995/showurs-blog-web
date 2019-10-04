import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
