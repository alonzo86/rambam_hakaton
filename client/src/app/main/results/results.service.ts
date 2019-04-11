import { Injectable } from '@angular/core';
import { IPatientStatus } from '../sample/sample.model';
import { Observable, from, of } from 'rxjs';
import {delay} from "rxjs/operators";

@Injectable()
export class ResultsService {

    getResultsFromRecommendationService(patients: IPatientStatus[]): Observable<IPatientStatus[]> {

        let newPatients: IPatientStatus[];
        newPatients = [];
        for (const patient of patients) {
            const clone = Object.assign({}, patient);
            clone.assignment = 'A';
            newPatients.push(clone);
        }

        return of(newPatients).pipe(delay(3000  ));
    }
    
}