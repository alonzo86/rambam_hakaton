import { DialogModule } from './../../layout/components/dialog/dialog.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatIconModule, MatTabsModule, MatRippleModule, MatSlideToggleModule, MatTableModule, MatDialogModule } from '@angular/material';
import { SampleComponent } from './sample.component';
import { UnitStatusComponent } from './unit-status/unit-status.component';
import { UnitStatusService } from './sample.service';
import { ResultsModule } from '../results/results.module';
import { ContainerDialogComponent } from './dialog/container-dialog.component';

const routes = [
    {
        path     : 'units',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent,
        UnitStatusComponent,
        ContainerDialogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        FuseSharedModule,
        DialogModule,
        ResultsModule
    ],
    providers: [
        UnitStatusService
    ],
    exports     : [
        SampleComponent
    ],
    entryComponents: [
        ContainerDialogComponent
    ]
})

export class SampleModule
{
}
