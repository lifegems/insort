import { Component, OnInit, Input } from '@angular/core';

import { SubjectContainer } from './../shared/subject-container';
import { SubjectViewerComponent } from './../subject-viewer/subject-viewer.component';
import { Topic } from './../shared/topic';
import { TopicsService } from './../topics.service';

@Component({
  selector: 'app-region-viewer',
  templateUrl: './region-viewer.component.html',
  styleUrls: ['./region-viewer.component.css']
})
export class RegionViewerComponent implements OnInit {
  @Input() subjects: SubjectContainer[];
  @Input() sorters: string[];
  display: string;
  topics: Topic[];

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
  	this.display = this.sorters[0];
  }

  select(subject: SubjectContainer) {
    this.topics = this.topicsService.listTopicsForPath(subject.path);
  }

  setDisplay(sorter: string) {
    this.display = sorter;
  }

}
