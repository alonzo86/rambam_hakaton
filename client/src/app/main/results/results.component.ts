import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatientStatus } from '../sample/sample.model';
import { ResultsService } from './results.service';

@Component({
    selector: 'results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    
    @Input() patients: IPatientStatus[];

    recommendedPatientsStatus$: Observable<IPatientStatus[]>;
    
    constructor(private _resultsService: ResultsService) { }   

    ngOnInit(): void { 

        // until we intergate modules i populate it manually
        this.patients = [];
        this.patients.push(this.getFakePatient());

        this.recommendedPatientsStatus$ = this._resultsService.getResultsFromRecommendationService(this.patients);
    }

    private getFakePatient(): IPatientStatus {
        return {
            id: '123123',
            department: '',
            assignment: '',
            gender: 'M',
            returningPatient: false,
            previousReleasingDepartment: '',
            totalTimeInMelrad: 100,
            waitingTime: 50,
            givenArtificialRespiration: false,
            nursingComplexityIndependentPatient: false,
            nursingComplexityNursedPatient: false,
            medicalComplexityMonitor: false,
            medicalComplexityOxygen: false,
            isolationResistant: false,
            isolationType: '',
            neutropeticPatient: false,
            selected: true
        };
    }
}