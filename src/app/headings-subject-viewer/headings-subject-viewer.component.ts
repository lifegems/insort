import { Component, OnInit, Input } from '@angular/core';

import { SubjectContainer } from './../subject-viewer/subject-container';
import { Topic } from './../topic-viewer/topic';
import { TopicsService } from './../topic-viewer/topics.service';
import { SubjectViewerComponent } from './../subject-viewer/subject-viewer.component';

@Component({
  selector: 'app-headings-subject-viewer',
  templateUrl: './headings-subject-viewer.component.html',
  styleUrls: ['./headings-subject-viewer.component.css']
})
export class HeadingsSubjectViewerComponent implements OnInit {
  @Input() subject: SubjectContainer;
  @Input() collapsed: boolean = false;
  topics: Topic[];

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topics = this.topicsService.listTopicsForPath(this.subject.path);
  }

}
