import {Component, Input, OnInit} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import {Observable} from 'rxjs';
import {IPatientStatus} from '../sample/sample.model';
import {PatientsStatusService} from './patients.service';
import {map} from "rxjs/operators";

@Component({
    selector   : 'patients',
    templateUrl: './patients.component.html',
    styleUrls  : ['./patients.component.scss'],
    animations   : fuseAnimations
})
export class PatientsComponent implements OnInit {
    @Input() unitId: string;
    selected:boolean;

    public patients: Observable<IPatientStatus[]>;

    displayedColumns = ['id', 'בחר', 'Assignment', 'department', 'gender', 'returningPatient', 'previousReleasingDepartment', 'totalTimeInMelrad',
        'waitingTime', 'givenArtificialRespiration', 'nursingComplexityIndependentPatient',
        'nursingComplexityNursedPatient', 'medicalComplexityMonitor', 'medicalComplexityOxygen',
        'isolationResistant', 'isolationType', 'neutropeticPatient'];

    constructor(private patientsStatusService: PatientsStatusService) {
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

    changeSelection(val): boolean {
        return !val;
    }
}





