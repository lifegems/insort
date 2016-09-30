import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { RouterModule } from '@angular/router';
import { RootRoutes } from './routes';

// other components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GroupViewComponent } from './group-view/group-view.component';
import { SubjectViewerComponent } from './subject-viewer/subject-viewer.component';

import { TopicsService } from './topics.service';
import { TopicViewerComponent } from './topic-viewer/topic-viewer.component';
import { RegionViewerComponent } from './region-viewer/region-viewer.component';
import { AlphaSubjectViewerComponent } from './alpha-subject-viewer/alpha-subject-viewer.component';
import { HeadingsSubjectViewerComponent } from './headings-subject-viewer/headings-subject-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    GroupViewComponent,
    SubjectViewerComponent,
    TopicViewerComponent,
    RegionViewerComponent,
    AlphaSubjectViewerComponent,
    HeadingsSubjectViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot(RootRoutes)
  ],
  providers: [TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
