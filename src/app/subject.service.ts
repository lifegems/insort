import { Injectable } from '@angular/core';

import { Topic } from './shared/topic';
import { SubjectContainer } from './shared/subject-container';

var _ = require('underscore');

@Injectable()
export class SubjectService {
  private aSubjects: SubjectContainer[];

  constructor() {
    this.aSubjects = this.listSubjectData();
  }

  listSubjects(): SubjectContainer[] {
    return this.aSubjects;
  }

  listSubjectChildren(strTabName: string): SubjectContainer[] {
    return _.find(this.aSubjects, function(Tab: SubjectContainer) {
      return Tab.name === this;
    }, strTabName);
  }

  listSubjectsByCode(strTabCode: string): SubjectContainer[] {
    let aSubjects = _.filter(this.aSubjects, function(Tab: SubjectContainer) {
      return Tab.code === this;
    }, strTabCode);
    return aSubjects;
  }

  private listSubjectData(): SubjectContainer[] {
    let aSubjects: SubjectContainer[] = [
      {
        code: "PEOPLE",
        name: "People",
        children: [
          {
            code: 'BIBLEWRITERS',
            displays: ['HEADINGS'],
            name: 'Writers of the Bible',
            children: [
              {
                code: 'GREEKSCRIPTURES',
                name: 'Greek Scriptures'
              },
              {
                code: 'HEBREWSCIPTURES',
                name: 'Hebrew Scriptures'
              }
            ]
          },
          {
            code: 'KINGSOFISRAEL',
            displays: ['HEADINGS'],
            name: 'Kings of Israel',
            children: [
              {
                code: 'ISRAEL',
                name: 'Israelite'
              },
              {
                code: 'JUDAH',
                name: 'Judean'
              }
            ]
          }
        ]
      },
      {
        code: 'GEO',
        name: 'Geography',
        children: [
          {
            code: 'POWERS',
            name: 'World Powers',
            displays: ['HEADINGS'],
            children: [
              { code: 'EGYPT', name: 'Egypt' }
            ]
          }
        ]
      },
      {
        code: 'INDEX',
        name: 'Index',
        children: [
          {
            code: 'ALPHA',
            name: 'Alphabetical Listing',
            displays: ['ALPHA', 'HEADINGS'],
            children: [
              { code: 'A', name: 'A' },
              { code: 'B', name: 'B' },
              { code: 'C', name: 'C' },
              { code: 'D', name: 'D' },
              { code: 'E', name: 'E' },
              { code: 'F', name: 'F' },
              { code: 'G', name: 'G' },
              { code: 'H', name: 'H' },
              { code: 'I', name: 'I' },
              { code: 'J', name: 'J' },
              { code: 'K', name: 'K' },
              { code: 'L', name: 'L' },
              { code: 'M', name: 'M' },
              { code: 'N', name: 'N' },
              { code: 'O', name: 'O' },
              { code: 'P', name: 'P' },
              { code: 'Q', name: 'Q' },
              { code: 'R', name: 'R' },
              { code: 'S', name: 'S' },
              { code: 'T', name: 'T' },
              { code: 'U', name: 'U' },
              { code: 'V', name: 'V' },
              { code: 'W', name: 'W' },
              { code: 'Y', name: 'Y' },
              { code: 'Z', name: 'Z' }
            ]
          },
          {
            code: 'SUBJECT',
            name: 'Subject Index',
            displays: ['HEADINGS'],
            children: [
              { code: 'AARON', name: 'Aaron' },
              { code: 'ABEL',  name: 'Abel' },
              { code: 'ABIHU', name: 'Abihu' }
            ]
          },
          {
            code: 'SCRIPTURE',
            name: 'Scripture Index',
            displays: ['HEADINGS'],
            children: [
              { code: 'GEN', name: 'Genesis' },
              { code: 'EX', name: 'Exodus' }
            ]
          }
        ]
      }
    ];
    _.each(aSubjects, (subject: SubjectContainer) => {
      subject.path = subject.code;
      subject.isCollapsed = true;
      _.each(subject.children, (child) => {
        child.path = subject.path + "." + child.code;
        child.isCollapsed = true;
        _.each(child.children, (grandchild) => {
          grandchild.path = child.path + "." + grandchild.code;
          grandchild.isCollapsed = true;
        });
      });
    });
    return aSubjects;
  }
}
