import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule
    ],
    exports: [
        NavComponent
    ]
})
export class SharedModule { }
