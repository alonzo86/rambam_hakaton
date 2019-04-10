import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatIconModule, MatTabsModule, MatRippleModule, MatSlideToggleModule, MatTableModule } from '@angular/material';
import {PatientsStatusService} from './patients.service';
import {PatientsComponent} from './patients.component';

const routes = [
    {
        path     : 'patients',
        component: PatientsComponent
    }
];

@NgModule({
    declarations: [PatientsComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        FuseSharedModule
    ],
    providers: [PatientsStatusService],
    exports: [PatientsComponent]
})

export class PatientsModule { }
