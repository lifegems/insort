import { Component, OnInit, Input } from '@angular/core';

import { SubjectContainer } from './subject-container';
import { Topic } from './../topic-viewer/topic';
import { TopicsService } from './../topic-viewer/topics.service';

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
