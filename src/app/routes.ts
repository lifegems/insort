import { Routes } from '@angular/router';
import { GroupViewComponent } from './group-view/group-view.component';
import { GlossaryComponent } from './glossary/glossary.component';

export const RootRoutes: Routes = [
  {
    path: 'insort',
    component: GroupViewComponent
  },
  {
  	path: 'glossary',
  	component: GlossaryComponent
  },
  {
    path: '**',
    redirectTo: 'insort'
  }
];