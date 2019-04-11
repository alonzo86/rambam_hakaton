import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import {
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { ResultsComponent } from './results.component';
import { ResultsService } from './results.service';
import { RecommendationComponent } from './recommendation/recommendation.component';
import {DepartmentsComponent} from './departments/departments.component';

const routes = [
    {
        path     : 'results',
        component: ResultsComponent
    }
];

@NgModule({
    declarations: [ResultsComponent, RecommendationComponent, DepartmentsComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        FuseSharedModule
    ],
    providers: [ResultsService],
    exports: [ResultsComponent]
})
export class ResultsModule { }
