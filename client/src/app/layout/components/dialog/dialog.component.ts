import { Component } from '@angular/core';
import {Observable, of} from 'rxjs';
import {flatMap, map, reduce} from 'rxjs/operators';

interface DepartmentRow {
    category: string;
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    H: string;
}

interface Department {
    name: string;
    totalBeds: number;
    usedBeds: number;
    totalResperated: number;
    usedResperated: number;
    usedLast24Hours: number;
    alreadyAssigned: number;
}

@Component({
    selector   : 'dialogCompomnent',
    templateUrl: './dialog.component.html',
    styleUrls  : ['./dialog.component.scss']
})
export class DialogComponent {
    public departments$: Observable<DepartmentRow[]>;
    data: Department[] = [
        {
            name: 'A',
            totalBeds: 30,
            usedBeds: 5,
            totalResperated: 6,
            usedResperated: 2,
            usedLast24Hours: 20,
            alreadyAssigned: 2
        },
        {
            name: 'B',
            totalBeds: 30,
            usedBeds: 5,
            totalResperated: 6,
            usedResperated: 2,
            usedLast24Hours: 20,
            alreadyAssigned: 2
        },
        {
            name: 'C',
            totalBeds: 30,
            usedBeds: 5,
            totalResperated: 6,
            usedResperated: 2,
            usedLast24Hours: 20,
            alreadyAssigned: 2
        },
        {
            name: 'D',
            totalBeds: 30,
            usedBeds: 5,
            totalResperated: 6,
            usedResperated: 2,
            usedLast24Hours: 20,
            alreadyAssigned: 2
        },
        {
            name: 'E',
            totalBeds: 30,
            usedBeds: 5,
            totalResperated: 6,
            usedResperated: 2,
            usedLast24Hours: 20,
            alreadyAssigned: 2
        },
        {
            name: 'H',
            totalBeds: 30,
            usedBeds: 5,
            totalResperated: 6,
            usedResperated: 2,
            usedLast24Hours: 20,
            alreadyAssigned: 2
        }
    ];

    displayedDepsColumns = ['category', 'A', 'B', 'C', 'D', 'E', 'H'];

    /**
     * Constructor
     */
    constructor() {
        this.departments$ = of(this.data)
            .pipe(
                map(deps => {
                    const acc = [<DepartmentRow>{ category: 'מיטות'}, <DepartmentRow>{ category: 'מונשמים'},
                        <DepartmentRow>{ category: 'יממה אחרונה'}, <DepartmentRow>{ category: 'מוקצים'}];
                    for (let d of deps) {
                        acc[0][d.name] = `${d.usedBeds}/${d.totalBeds}`;
                        acc[1][d.name] = `${d.usedResperated}/${d.totalResperated}`;
                        acc[2][d.name] = d.usedLast24Hours;
                        acc[3][d.name] = d.alreadyAssigned;
                    }
                    return acc;
                })
            );
    }

}
