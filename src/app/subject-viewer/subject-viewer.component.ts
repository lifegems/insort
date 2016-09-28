import { Component, OnInit, Input } from '@angular/core';

import { SubjectContainer } from './../shared/subject-container';
import { Topic } from './../shared/topic';
import { TopicsService } from './../topics.service';

@Component({
  selector: 'app-subject-viewer',
  templateUrl: './subject-viewer.component.html',
  styleUrls: ['./subject-viewer.component.css']
})
export class SubjectViewerComponent implements OnInit {
  @Input() subject: SubjectContainer;

  topics: Topic[];

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topics = this.topicsService.listTopicsForPath(this.subject.path);
  }

}
