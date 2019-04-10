import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPatientStatus} from '../sample/sample.model';
import {Observable} from 'rxjs';
import {PATIENTS_SERVICE} from '../constants';
import {switchMap} from "rxjs-compat/operator/switchMap";
import {map} from "rxjs/operators";

@Injectable()
export class PatientsStatusService {
    constructor(private _httpClient: HttpClient) { }

    public getPatients(): Observable<IPatientStatus[]> {
        return this._httpClient.get<IPatientStatus[]>(`${PATIENTS_SERVICE}/patient/all`);
    }
}
