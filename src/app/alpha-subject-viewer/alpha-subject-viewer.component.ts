import { Component, OnInit, Input } from '@angular/core';

import { SubjectContainer } from './../subject-viewer/subject-container';
import { Topic } from './../topic-viewer/topic';
import { TopicsService } from './../topic-viewer/topics.service';
import { SubjectViewerComponent } from './../subject-viewer/subject-viewer.component';

@Component({
  selector: 'app-alpha-subject-viewer',
  templateUrl: './alpha-subject-viewer.component.html',
  styleUrls: ['./alpha-subject-viewer.component.css']
})
export class AlphaSubjectViewerComponent extends SubjectViewerComponent implements OnInit {
  @Input() subject: SubjectContainer;
  topics: Topic[];

  constructor(topicsService: TopicsService) {
    super(topicsService);
  }

  ngOnInit() {
  }

}
