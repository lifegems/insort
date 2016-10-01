import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WordsService implements OnInit {
  private aWords: Word[];

  constructor() { }

  ngOnInit() {
    this.aWords = this.listWords();
  }

  getWords() {
    return this.aWords;
  }

  listWords(): Word[] {
    return [
      {
        word: "Anointed",
        definition: "A person chosen by God for a special purpose. Anointed Christians are the 144,000"
      }
      {
        word: "Bible Students",
        definition: "Bible Students: Before 1931, Jehovah’s Witnesses were called Bible Students"
      },
      {
        word: "Christendom",
        definition: "Christendom: Religions that call themselves Christian but that do not follow the teachings of Christ"
      },
      {
        word: "Disfellowship",
        definition: "Disfellowship: To “remove the wicked man” or woman from the congregation"
      },
      {
        word: "False teachers",
        definition: "False teachers, or apostates: People who rebel against true worship and abandon it"
      },
      {
        word: "God's day of rest",
        definition: "God’s day of rest: A period of thousands of years that Jehovah uses to complete his purpose for the earth and obedient humans"
      },
      {
        word: "Illustration",
        definition: "An example that helps us to understand Bible truths"
      },
      {
        word: "Imperfect",
        definition: "Imperfect: Someone who is imperfect makes mistakes, does things wrong"
      },
      {
        word: "Nephilim",
        definition: "Nephilim (Genesis 6:4): The children from wicked angels and women"
      },
      {
        word: "Perceptive powers",
        definition: "Perceptive powers (Hebrews 5:14): The ability to think carefully about things and then choose between right and wrong"
      },
      {
        word: "Sabbath",
        definition: "Sabbath: The seventh day of the week and a day of rest from regular work for the Israelites"
      },
      {
        word: "Scroll",
        definition: "A roll of parchment, leather, or papyrus used by Bible writers"
      },
      {
        word: "Tribe of Judah",
        definition: "A tribe in Israel. Descendants of Judah, the son of Jacob"
      },
      {
        word: "Unrealities",
        definition: "Unrealities (1 Samuel 12:21): Things that people believe can help them but that cannot really make them happy and safe"
      },
    ];
  }
}

export class Word {
  word: string;
  definition: string;
}