import { Component, OnInit, Input } from '@angular/core';
import { IPatientStatus } from 'app/main/sample/sample.model';

@Component({
    selector: 'departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
    @Input() patients: IPatientStatus[];

    constructor() { }

    ngOnInit() {
    }

}
