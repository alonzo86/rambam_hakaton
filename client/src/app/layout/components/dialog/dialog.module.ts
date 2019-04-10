import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatDialogModule, MatRippleModule, MatSlideToggleModule, MatTableModule} from '@angular/material';

import {FuseSharedModule} from '@fuse/shared.module';

import {DialogComponent} from 'app/layout/components/dialog/dialog.component';

@NgModule({
    declarations: [
        DialogComponent
    ],
    imports     : [
        RouterModule,
        MatDialogModule,
        FuseSharedModule,
        MatRippleModule,
        MatTableModule
    ],
    exports     : [
        DialogComponent
    ],
    entryComponents: [
        DialogComponent
    ]

})
export class DialogModule
{
}
