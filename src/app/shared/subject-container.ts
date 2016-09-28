import { Topic } from './topic';

export class SubjectContainer {
  code: string;
  name: string;

  children?: SubjectContainer[];
  href?: string;
  isCollapsed?: boolean;
  isNew?: boolean;
  path?: string;
  sorters?: string[];
  topics?: Topic[];
}