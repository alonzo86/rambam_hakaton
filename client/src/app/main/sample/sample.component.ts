import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss'],
    animations   : fuseAnimations
})
export class SampleComponent implements OnInit
{  
    ngOnInit() {

    }
}
