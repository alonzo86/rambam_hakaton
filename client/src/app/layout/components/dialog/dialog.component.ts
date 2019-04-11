import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material";


@Component({
    selector   : 'dialogCompomnent',
    templateUrl: './dialog.component.html',
    styleUrls  : ['./dialog.component.scss']
})
export class DialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) data)
    {
        console.log(data);
    }

}
