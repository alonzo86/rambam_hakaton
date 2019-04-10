import { Injectable } from '@angular/core';
import { IPatientStatus } from '../sample/sample.model';
import { Observable, from, of } from 'rxjs';

@Injectable()
export class ResultsService {

    getResultsFromRecommendationService(patients: IPatientStatus[]): Observable<IPatientStatus[]> {

        for (const patient of patients) {
            patient.assignment = 'A';
        }

        return of(patients);
    }
    
}