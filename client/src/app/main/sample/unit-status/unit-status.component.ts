import { Component, OnInit, Input } from '@angular/core';
import { IUnitStatus, IUnitSummary } from '../sample.model';
import { UnitStatusService } from '../sample.service';
import { Observable } from 'rxjs';

@Component({
    selector   : 'unit-status',
    templateUrl: './unit-status.component.html',
    styleUrls  : ['./unit-status.component.scss']
})
export class UnitStatusComponent implements OnInit
{
    @Input() unitId: string;

    public status$: Observable<IUnitStatus>;
    public summary: IUnitSummary;
    displayedColumns = ['id', 'name', 'gender', 'intubated', 'isolation', 'assisted', 'medical', 'bed', 'admission'];

    constructor(private unitStatusService: UnitStatusService) {}

    ngOnInit() {
        this.status$ = this.unitStatusService.getUnitStatus(this.unitId);
        this.status$.subscribe((data) => {
            this.summary = this.unitStatusService.getUnitSummary(data);
        });        
    }

    onSelect(row: any) {

    }
}
