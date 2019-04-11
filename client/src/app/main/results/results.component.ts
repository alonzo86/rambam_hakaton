import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {IDepartmentStatus, IPatientStatus} from '../sample/sample.model';
import { ResultsService } from './results.service';

@Component({
    selector: 'results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    @Input() departments: Array<IDepartmentStatus> = [];
    @Input() selectedPatients: Array<IPatientStatus> = [];
    @Input() allPatients: Array<IPatientStatus> = [];
    @Input() showHeader = false;

    recommendedPatientsStatus$: Observable<IPatientStatus[]>;
    
    constructor(private _resultsService: ResultsService) { }

    ngOnInit(): void {
        this.recommendedPatientsStatus$ = this._resultsService.getResultsFromRecommendationService(this.selectedPatients, this.allPatients, this.departments);
        this.recommendedPatientsStatus$.subscribe(x => console.log('recommendedPatientsStatus', x));
    }
}
