import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatIconModule, MatTabsModule, MatRippleModule, MatSlideToggleModule, MatTableModule } from '@angular/material';
import { SampleComponent } from './sample.component';
import { UnitStatusComponent } from './unit-status/unit-status.component';
import { UnitStatusService } from './sample.service';

const routes = [
    {
        path     : 'units',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent,
        UnitStatusComponent
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
        FuseSharedModule
    ],
    providers: [
        UnitStatusService
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
