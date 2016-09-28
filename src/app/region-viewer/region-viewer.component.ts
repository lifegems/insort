import { Component, OnInit, Input } from '@angular/core';

import { SubjectContainer } from './../shared/subject-container';
import { SubjectViewerComponent } from './../subject-viewer/subject-viewer.component';

@Component({
  selector: 'app-region-viewer',
  templateUrl: './region-viewer.component.html',
  styleUrls: ['./region-viewer.component.css']
})
export class RegionViewerComponent implements OnInit {
  @Input() subjects: SubjectContainer[];
  @Input() sorters: string[];
  display: string;

  constructor() { }

  ngOnInit() {
  	this.display = this.sorters[0];
  }

}
