import { ResultsModule } from './../results/results.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import {
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule, MatDialogModule, MatPaginatorModule, MatToolbarModule
} from '@angular/material';
import {PatientsStatusService} from './patients.service';
import {PatientsComponent} from './patients.component';
import { ResultsDialogComponent } from './results-dialog/results-dialog.component';
import { DialogModule } from 'app/layout/components/dialog/dialog.module';

const routes = [
    {
        path     : 'patients',
        component: PatientsComponent
    }
];

@NgModule({
    declarations: [PatientsComponent, ResultsDialogComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule,
        MatDialogModule,
        MatToolbarModule,
        FuseSharedModule,
        DialogModule,
        ResultsModule
    ],
    providers: [PatientsStatusService],
    exports: [PatientsComponent],
    entryComponents: [ResultsDialogComponent]
})

export class PatientsModule { }
