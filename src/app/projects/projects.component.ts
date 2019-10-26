import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  projects: any;
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getProjects()
    .then(data => {
      console.log(data);
      this.projects = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
