import { Routes } from '@angular/router';
import { GroupViewComponent } from './group-view/group-view.component';

export const RootRoutes: Routes = [
  {
    path: 'insort',
    component: GroupViewComponent
  },
  {
    path: '**',
    redirectTo: 'insort'
  }
];