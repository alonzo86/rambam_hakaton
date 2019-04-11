import {Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {IDepartmentStatus, IPatientStatus} from '../../sample/sample.model';

@Component({
    selector: 'app-results-dialog',
    templateUrl: './results-dialog.component.html',
    styleUrls: ['./results-dialog.component.scss']
})
export class ResultsDialogComponent implements OnInit {
    resultExist: boolean;
    selectedPatients: Array<IPatientStatus> = [];
    allPatients: Array<IPatientStatus> = [];
    departments: Array<IDepartmentStatus> = [];

    @Output() close = new EventEmitter();

    constructor(@Inject(MAT_DIALOG_DATA) data) {
        this.selectedPatients = data.selectedPatients;
        this.allPatients = data.allPatients;
        this.departments = data.departments;
        this.resultExist = false;
    }

    ngOnInit() {
    }

    resultsExist() {

    }

    onApprove() {
        this.close.emit();
    }

    onReject() {
        this.close.emit();
    }

}
