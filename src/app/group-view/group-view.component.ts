import { Component, OnInit } from '@angular/core';

import { SubjectService } from './../subject.service';
import { TopicsService } from './../topics.service';
import { Topic } from './../shared/topic';
import { SubjectContainer } from './../shared/subject-container';
import { SubjectViewerComponent } from './../subject-viewer/subject-viewer.component';
import { RegionViewerComponent } from './../region-viewer/region-viewer.component';

var _ = require('underscore');

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css'],
  providers: [SubjectService, TopicsService]
})
export class GroupViewComponent implements OnInit {
  tabs: SubjectContainer[];

  constructor(private subjectService: SubjectService, private topicsService: TopicsService) { }

  ngOnInit() {
    // this.aSections = this.listInfoForView();
    this.tabs = this.subjectService.listSubjects();
  }



  listInfoForView() {
    // tabs > categories > topics > name
    var aSections = this.subjectService.listSubjects();
    // _.each(aSections, function(tab) {
    //   _.each(tab.categories, function(cat) {
    //     _.each(cat.topics, function(topic) {
    //       topic.isCollapsed = true;
    //       var aItems = [];
    //       _.each(this.topicsService.listTopics(), function(article) {
    //         _.each(article.paths, function(path) {
    //           var aPath = path.split(".");
    //           if (tab.code === aPath[0] && cat.code === aPath[1] && topic.code === aPath[2]) {
    //             aItems.push(article);
    //           }
    //         });
    //         if (tab.code === 'INDEX' && cat.code === 'ALPHA' && article.name.charAt(0) == topic.code) {
    //           aItems.push(article);
    //         }
    //       });
    //       topic.items = aItems;
    //     });
    //   });
    // });
    return aSections;
  }
}
