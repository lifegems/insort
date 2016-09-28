import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SubjectContainer } from './../shared/subject-container';
import { Topic } from './../shared/topic';
import { TopicsService } from './../topics.service';
import { SubjectViewerComponent } from './../subject-viewer/subject-viewer.component';

@Component({
  selector: 'app-alpha-subject-viewer',
  templateUrl: './alpha-subject-viewer.component.html',
  styleUrls: ['./alpha-subject-viewer.component.css']
})
export class AlphaSubjectViewerComponent extends SubjectViewerComponent implements OnInit {
  @Input() subject: SubjectContainer;

  constructor(topicsService: TopicsService) {
    super(topicsService);
  }

  topics: Topic[];

  ngOnInit() {
  }

}
