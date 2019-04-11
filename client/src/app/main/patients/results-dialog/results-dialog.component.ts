import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {IPatientStatus} from "../../sample/sample.model";

@Component({
    selector: 'app-results-dialog',
    templateUrl: './results-dialog.component.html',
    styleUrls: ['./results-dialog.component.scss']
})
export class ResultsDialogComponent implements OnInit {
    resultExist: boolean;
    patients: Array<IPatientStatus> = [];

    constructor(@Inject(MAT_DIALOG_DATA) data) {
        this.patients = data.patients;
        this.resultExist = false;
    }

    ngOnInit() {
    }

    resultsExist() {

    }

}
