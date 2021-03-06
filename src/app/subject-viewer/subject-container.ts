import { Topic } from './../topic-viewer/topic';

export class SubjectContainer {
  code: string;
  name: string;

  children?: SubjectContainer[];
  href?: string;
  isCollapsed?: boolean;
  isNew?: boolean;
  path?: string;
  displays?: string[];
  topics?: Topic[];
}