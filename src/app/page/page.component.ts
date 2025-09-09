import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { WorkExpComponent } from "../work-exp/work-exp.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-page',
  imports: [HomeComponent, AboutComponent, ProjectsComponent, WorkExpComponent, ContactComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
