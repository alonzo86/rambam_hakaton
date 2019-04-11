import { Injectable } from '@angular/core';
import {IDepartmentStatus, IPatientStatus} from '../sample/sample.model';
import { Observable } from 'rxjs';
import {PATIENTS_ASSIGNMENT_SERVICE} from '../constants';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ResultsService {

    constructor(private _httpClient: HttpClient) { }

    getResultsFromRecommendationService(selectedPatients: IPatientStatus[], allPatients: IPatientStatus[], departments: IDepartmentStatus[]): Observable<IPatientStatus[]> {
        return this._httpClient.post<IPatientStatus[]>(`${PATIENTS_ASSIGNMENT_SERVICE}/assignments`, {
            patients: selectedPatients,
            departments: departments,
            waiting: allPatients
        });
    }
}
