import { Component, OnInit } from '@angular/core';
import { Groups } from './../shared/groups';

var _ = require('underscore');

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {
  aSections;

  constructor() { }

  ngOnInit() {
    var aSections = Groups.aSections;
    _.each(aSections, function(section) {
      _.each(section.categories, function(category) {
        _.each(category.topics, function(topic) {
          topic.isCollapsed = true;
        });
      });
    });
    this.aSections = aSections;
  }

}
