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
    assignments: {[key: string]: number} = {};
    displayedDepsColumns = ['category', 'A', 'B', 'C', 'D', 'E', 'H'];

    constructor(private departmentsService: DepartmentsStatusService,
                private patientsService: PatientsStatusService) {}

    ngOnInit(): void {
        this.departments$ = combineLatest(this.departmentsService.getDepartments(), this.patientsService.getPatients())
            .pipe(
                map(([deps, patients]) => {
                    const rows = [<DepartmentRow>{ category: 'מיטות'}, <DepartmentRow>{ category: 'מונשמים'}];

                    for (let d of deps) {
                        rows[0][d.name] = rows[0][d.name] || {};
                        rows[1][d.name] = rows[1][d.name] || {};

                        rows[0][d.name].used = d.emergencyOccupiedBedCount + d.hallwayOccupiedBedCount + d.regularOccupiedBedCount + d.singleOccupiedBedCount;
                        rows[0][d.name].total = d.totalBedCount;

                        rows[1][d.name].used = d.emergencyOccupiedBedCount;
                        rows[1][d.name].total = d.emergencyBedCount;

                        this.assignments[d.name] = patients.filter(p => p.department === d.name).length;
                    }
                    return rows;
                })
            );
    }
}
