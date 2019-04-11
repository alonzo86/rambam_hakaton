import { Component, OnInit, Input } from '@angular/core';
import { IPatientStatus } from 'app/main/sample/sample.model';
import {combineLatest, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {PatientsStatusService} from '../../patients/patients.service';
import {DepartmentsStatusService} from './departments.service';

interface DepartmentRow {
    category: string;
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    H: string;
}

@Component({
    selector: 'departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
    @Input() patients: IPatientStatus[];

    departments$: Observable<DepartmentRow[]>;

    displayedDepsColumns = ['category', 'A', 'B', 'C', 'D', 'E', 'H'];

    constructor(private departmentsService: DepartmentsStatusService,
                private patientsService: PatientsStatusService) {}

    ngOnInit(): void {
        this.departments$ = combineLatest(this.departmentsService.getDepartments(), this.patientsService.getPatients())
            .pipe(
                map(([deps, patients]) => {
                    const rows = [<DepartmentRow>{ category: 'מיטות'}, <DepartmentRow>{ category: 'מונשמים'},
                        <DepartmentRow>{ category: 'יממה אחרונה'}, <DepartmentRow>{ category: 'מוקצים'}];

                    for (let d of deps) {
                        rows[0][d.name] = rows[0][d.name] || {};
                        rows[1][d.name] = rows[1][d.name] || {};
                        rows[2][d.name] = rows[2][d.name] || {};
                        rows[3][d.name] = rows[3][d.name] || {};

                        rows[0][d.name].used = d.emergencyOccupiedBedCount + d.hallwayOccupiedBedCount + d.regularOccupiedBedCount + d.singleOccupiedBedCount;
                        rows[0][d.name].total = d.totalBedCount;
                        rows[0][d.name].showPercent = true;

                        rows[1][d.name].used = d.emergencyOccupiedBedCount;
                        rows[1][d.name].total = d.emergencyBedCount;
                        rows[1][d.name].showPercent = true;

                        rows[2][d.name].used = patients.filter(p => p.department === d.name).length;
                        rows[2][d.name].total = d.totalBedCount;
                        rows[2][d.name].showPercent = false;

                        rows[3][d.name].used = d.emergencyAcceptedLast24Hours + d.hallwayAcceptedLast24Hours + d.regularAcceptedLast24Hours + d.singleAcceptedLast24Hours;
                        rows[3][d.name].total = d.totalBedCount;
                        rows[3][d.name].showPercent = false;
                    }
                    return rows;
                })
            );
    }
}
