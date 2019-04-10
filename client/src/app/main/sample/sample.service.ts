import { IUnitStatus, IUnitSummary } from './sample.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UnitStatusService
{
    constructor(private _httpClient: HttpClient) { }

    getUnitSummary(unitStatus: IUnitStatus): IUnitSummary {
        const patients = unitStatus.patients;

        const summary: IUnitSummary = {
            totalFemale: 0,
            totalMale: 0,
            totalBedNormal: 0,
            totalBedUnit: 0,
            totalBedIsolation: 0,
            totalBedCorridor: 0,
            totalAsissted: 0,
            totalIntubated: 0,
            totalMedicalMonitor: 0,            
            totalMedicalOxygen: 0,
            avgAge: 0
        };

        for (const patient of patients) {
            summary.totalFemale += patient.gender === 'F' ? 1 : 0;
            summary.totalMale += patient.gender === 'M' ? 1 : 0;
        }
        summary.avgAge = summary.avgAge / patients.length;

        return summary;
    }

    getUnitStatus(id: string): Observable<IUnitStatus> {
        return this._httpClient.get<IUnitStatus>('https://5u5gk2srsd.execute-api.eu-central-1.amazonaws.com/v1/unit/' + id);
        

        // return this.getLocalUnitStatus();
    }

    private getLocalUnitStatus(): IUnitStatus {
        return <IUnitStatus>{};
    }

}
