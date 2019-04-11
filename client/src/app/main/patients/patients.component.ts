import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import {Observable} from 'rxjs';
import {IPatientStatus} from '../sample/sample.model';
import {PatientsStatusService} from './patients.service';
import {MatDialog, MatPaginator, MatTableDataSource, MatDialogConfig} from '@angular/material';
import { ResultsDialogComponent } from './results-dialog/results-dialog.component';
import {map} from 'rxjs/operators';
import {DepartmentsStatusService} from '../results/departments/departments.service';

@Component({
    selector   : 'patients',
    templateUrl: './patients.component.html',
    styleUrls  : ['./patients.component.scss'],
    animations   : fuseAnimations
})
export class PatientsComponent implements OnInit {
    @Input() unitId: string;
    allSelected: boolean;
    currSelected:Array<IPatientStatus> = [];
    resultsLength = 0;

    dataSource: MatTableDataSource<IPatientStatus>;
    public patients$: Observable<IPatientStatus[]>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns = ['selected', 'id', 'department', 'gender', 'previousReleasingDepartment', 'totalTimeInMelrad',
        'waitingTime', 'givenArtificialRespiration', 'nursingComplexityIndependentPatient',
        'medicalComplexityMonitor', 'medicalComplexityOxygen',
        'isolationType', 'neutropeticPatient'];

    constructor(private patientsStatusService: PatientsStatusService,
                private dialog: MatDialog,
                private departmentsService: DepartmentsStatusService) {
        this.allSelected = false;
    }

    ngOnInit(): void {
        this.patientsStatusService.getPatients()
            .pipe(
            map(patients => {
                    for (let patient of patients) {
                        patient.selected = false;
                    }
                    return patients;
                }
            )
        )
        .subscribe(res => {
            this.resultsLength = res.length;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
        });
    }

    changeSelection(cg: any , row): boolean {
        this.allSelected = false;
        if(cg.checked) {
            this.currSelected.push(row);
        }else {
            this.currSelected.forEach( (item, index) => {
                if(item === row) this.currSelected.splice(index,1);
            });
        }
        return row.selected = cg.checked;
    }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();
        this.departmentsService.getDepartments().subscribe(departments => {
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
                departments: departments,
                allPatients: this.dataSource.data.filter(p => !p.selected),
                selectedPatients: this.dataSource.data.filter(p => p.selected)
            };
            dialogConfig.width = '90em';
            dialogConfig.height = '58em';
            dialogConfig.panelClass  = 'results-form-dialog';
            const dialogRef = this.dialog.open(ResultsDialogComponent, dialogConfig);
            dialogRef.componentInstance.close.subscribe(() => {
                console.log("close");
                dialogRef.close();
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log(`Dialog result: ${result}`);
                this.patientsStatusService.getPatients()
                    .pipe(
                        map(patients => {
                                for (let patient of patients) {
                                    patient.selected = false;
                                }
                                return patients;
                            }
                        )
                    )
                    .subscribe(res => {
                        this.resultsLength = res.length;
                        this.dataSource = new MatTableDataSource(res);
                        this.dataSource.paginator = this.paginator;
                    });
            });
        });
    }

    selectAll(patients): void {
        this.allSelected = !this.allSelected;
        for (let patient of patients) {
            patient.selected = this.allSelected;
        }
        if(this.allSelected){
            this.currSelected = patients;
        } else {
            this.currSelected = [];
        }
    }
}





