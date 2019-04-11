import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IDepartmentStatus} from '../sample/sample.model';
import {Observable} from 'rxjs';
import {DEPARTMENTS_SERVICE} from '../constants';

@Injectable()
export class DepartmentsStatusService {
    constructor(private _httpClient: HttpClient) { }

    public getDepartments(): Observable<IDepartmentStatus[]> {
        return this._httpClient.get<IDepartmentStatus[]>(`${DEPARTMENTS_SERVICE}/department/all`);
    }
}
