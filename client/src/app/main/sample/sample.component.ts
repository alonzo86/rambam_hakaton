
import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss'],
    animations   : fuseAnimations
})
export class SampleComponent implements OnInit
{  
    constructor(public dialog: MatDialog) {

    }
    ngOnInit() {

    }

    onClick() {
        console.log('test');
    }
}
