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
        this.patients = this.initFakeData();

        this.recommendedPatientsStatus$ = this._resultsService.getResultsFromRecommendationService(this.patients);
        this.recommendedPatientsStatus$.subscribe(x => console.log('recommendedPatientsStatus', x));
    }


    private initFakeData(): IPatientStatus[] {
        const patients = [];
        patients.push({
            id: '123123',
            name: 'חולה א',
            department: '',
            assignment: '',
            gender: 'M',
            returningPatient: false,
            previousReleasingDepartment: '',
            totalTimeInMelrad: 100,
            waitingTime: 50,
            givenArtificialRespiration: false,
            nursingComplexityIndependentPatient: false,
            nursingComplexityNursedPatient: true,
            medicalComplexityMonitor: false,
            medicalComplexityOxygen: false,
            isolationResistant: false,
            isolationType: '',
            neutropeticPatient: false,
            selected: true
        });

        patients.push({
            id: '124124',
            name: 'חולה ב',
            department: '',
            assignment: '',
            gender: 'F',
            returningPatient: false,
            previousReleasingDepartment: '',
            totalTimeInMelrad: 300,
            waitingTime: 180,
            givenArtificialRespiration: false,
            nursingComplexityIndependentPatient: true,
            nursingComplexityNursedPatient: false,
            medicalComplexityMonitor: false,
            medicalComplexityOxygen: false,
            isolationResistant: false,
            isolationType: '',
            neutropeticPatient: false,
            selected: true
        });

        return patients;
    }
    
}
