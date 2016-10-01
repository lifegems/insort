import { Component, OnInit, Input } from '@angular/core';

import { Topic } from './../topic-viewer/topic';
import { TopicsService } from './../topic-viewer/topics.service';

@Component({
  selector: 'app-topic-viewer',
  templateUrl: './topic-viewer.component.html',
  styleUrls: ['./topic-viewer.component.css']
})
export class TopicViewerComponent implements OnInit {
  @Input()
  topic: Topic;

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
  }

}
