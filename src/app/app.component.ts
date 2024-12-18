import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveComponent } from './objective/objective.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    ObjectiveComponent,
    EducationComponent,
    ProjectsComponent,
    ActivitiesComponent,
    SkillsComponent,
    InterestsComponent,
    HeaderComponent
  ]
})
export class AppComponent {
  title = 'Assignment 9';

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
