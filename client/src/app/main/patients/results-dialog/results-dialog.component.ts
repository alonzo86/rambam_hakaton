import {Component, Inject, OnInit} from '@angular/core';
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

}
