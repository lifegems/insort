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
    this.aSections = listInfoForView();
  }

  function listInfoForView() {
    // tabs > categories > topics > name
    var aSections = Groups.aGroups;
    _.each(aSections, function(tab) {
      _.each(tab.categories, function(cat) {
        _.each(cat.topics, function(topic) {
          topic.isCollapsed = true;
          var aItems = [];
          _.each(Groups.aArticles, function(article) {
            _.each(article.paths, function(path) {
              var aPath = path.split(".");
              if (tab.code === aPath[0] && cat.code === aPath[1] && topic.code === aPath[2]) {
                aItems.push(article);
              }
            });
          });
          topic.items = aItems;
        });
      });
    });
    return aSections;
  }
}