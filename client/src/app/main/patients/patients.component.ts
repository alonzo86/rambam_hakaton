import {Component, Input, OnInit} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import {Observable} from 'rxjs';
import {IPatientStatus} from '../sample/sample.model';
import {PatientsStatusService} from './patients.service';
import {map} from "rxjs/operators";
import {SelectionModel} from "@angular/cdk/typings/esm5/collections";
import {MatDialog} from "@angular/material";
import {DialogComponent} from "../../layout/components/dialog/dialog.component";

@Component({
    selector   : 'patients',
    templateUrl: './patients.component.html',
    styleUrls  : ['./patients.component.scss'],
    animations   : fuseAnimations
})
export class PatientsComponent implements OnInit {
    @Input() unitId: string;
    selected: boolean;


    public patients: Observable<IPatientStatus[]>;

    displayedColumns = ['selected', 'id', 'department', 'gender', 'previousReleasingDepartment', 'totalTimeInMelrad',
        'waitingTime', 'givenArtificialRespiration', 'nursingComplexityIndependentPatient',
        'medicalComplexityMonitor', 'medicalComplexityOxygen',
        'isolationType', 'neutropeticPatient'];

    constructor(private patientsStatusService: PatientsStatusService,private dialog:MatDialog) {
    }

    ngOnInit(): void {
        this.patients = this.patientsStatusService.getPatients().pipe(
            map(patients => {
                    for (let patient of patients) {
                        patient.selected = false;
                    }
                    return patients;
                }
            )
        );
    }

    changeSelection(row): boolean {
        return row.selected = !row.selected;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}





