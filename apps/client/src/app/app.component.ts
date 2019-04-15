import { Component, OnInit } from '@angular/core';
import { ProjectStatus } from '@project/models';

@Component({
  selector: 'repro-for-issue1238-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  projectStatus = ProjectStatus;

  status = ProjectStatus.new;
}
