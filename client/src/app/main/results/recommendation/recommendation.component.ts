import { Component, OnInit, Input } from '@angular/core';
import { IPatientStatus } from 'app/main/sample/sample.model';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
    @Input() patients: IPatientStatus[];
    requireComment = false;
    comment = '';
    displayedColumns = ['avatar', 'id', 'name', 'p1', 'p2', 'department', 'assignment'];

    private originalData: IPatientStatus[];
    constructor() { }
    
    ngOnInit() {
        console.log('RecommendationComponent - ngOnInit', this.patients);
        
        this.originalData = [];
        for (const patient of this.patients) {
            const clone = Object.assign({}, patient);
            this.originalData.push(clone);
        }
    }

    getPatientAssistedStatus(patient: IPatientStatus): string {
        console.log('RecommendationComponent - getPatientAssistedStatus', patient);
        if (patient.nursingComplexityNursedPatient) {
            return 'סיעודי';
        }

        return 'עצמאי';
    }

    getPatientAvatar(patient: IPatientStatus): string {
        return patient.gender === 'F' ? 'assets/images/avatars/alice.jpg' : 'assets/images/avatars/andrew.jpg';
    }

    getCurrentDepartmentName(patient: IPatientStatus): string {
        if (patient.department === '') {
            return 'ללא';
        }

        return patient.department;
    }

    getWaitingTimeFormat(patient: IPatientStatus): string {
        const ms = patient.totalTimeInMelrad * 60 * 1000;
        const hours = Math.floor(patient.totalTimeInMelrad / 60);
        const minutes = patient.totalTimeInMelrad - (hours * 60);
        
        const strHours = hours.toString().padStart(2, '0');
        const strMinutes = minutes.toString().padStart(2, '0');
        return `${strHours}:${strMinutes}`;
    }

    onAssignmentChange(data: MatSelectChange, patient: IPatientStatus) {
        const newValue = data.value;
        const originalPatient = this.getOriginalPatient(patient);
        console.log(`onAssignmentChange ${originalPatient.assigndDepartment}->${newValue}`, data);
        this.requireComment = this.calculateNeedComment();
    }

    onApprove() {

    }

    onReject() {
        
    }

    private calculateNeedComment(): boolean {
        for (const patient of this.patients) {
            const opatient = this.getOriginalPatient(patient);
            if (opatient.assigndDepartment !== patient.assigndDepartment) {
                return true;
            }
        }

        return false;
    }

    private getOriginalPatient(patient: IPatientStatus): IPatientStatus {
        for (const opatient of this.originalData) {
            if (opatient.id === patient.id) {
                return opatient;
            }
        }

        return null;
    }

}
