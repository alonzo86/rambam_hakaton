import { Component, OnInit, Input } from '@angular/core';
import { IPatientStatus } from 'app/main/sample/sample.model';

@Component({
  selector: 'recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
    @Input() patients: IPatientStatus[];

    constructor() { }
    
    ngOnInit() {
    }

}
