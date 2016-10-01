import { Component, OnInit, Input } from '@angular/core';

import { SubjectContainer } from './../subject-viewer/subject-container';
import { SubjectViewerComponent } from './../subject-viewer/subject-viewer.component';
import { Topic } from './../topic-viewer/topic';
import { TopicsService } from './../topic-viewer/topics.service';

@Component({
  selector: 'app-region-viewer',
  templateUrl: './region-viewer.component.html',
  styleUrls: ['./region-viewer.component.css']
})
export class RegionViewerComponent implements OnInit {
  @Input() subjects: SubjectContainer[];
  @Input() displays: string[];
  display: string;
  topics: Topic[];

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
  	this.display = this.displays[0];
  }

  select(subject: SubjectContainer) {
    this.topics = this.topicsService.listTopicsForPath(subject.path);
  }

  setDisplay(display: string) {
    this.display = display;
  }

}
