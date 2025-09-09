import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'About', component: AboutComponent},
    { path: 'Experience', component: WorkExpComponent},
    { path: 'Projects', component: ProjectsComponent},
];
