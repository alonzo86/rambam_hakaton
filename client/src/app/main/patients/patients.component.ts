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
    allSelected:boolean;


    public patients$: Observable<IPatientStatus[]>;

    displayedColumns = ['selected', 'id', 'department', 'gender', 'previousReleasingDepartment', 'totalTimeInMelrad',
        'waitingTime', 'givenArtificialRespiration', 'nursingComplexityIndependentPatient',
        'medicalComplexityMonitor', 'medicalComplexityOxygen',
        'isolationType', 'neutropeticPatient'];

    constructor(private patientsStatusService: PatientsStatusService,private dialog:MatDialog) {
        this.allSelected = false;
    }

    ngOnInit(): void {
        this.patients$ = this.patientsStatusService.getPatients().pipe(
            map(patients => {
                    for (let patient of patients) {
                        patient.selected = false;
                    }
                    return patients;
                }
            )
        );
    }

    changeSelection(cg: any , row): boolean {
        this.allSelected = false;
        return row.selected = cg.checked;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                patients: []
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    selectAll(patients) {
        this.allSelected = !this.allSelected;
        for (let patient of patients) {
            patient.selected = this.allSelected;
        }




    }
}





