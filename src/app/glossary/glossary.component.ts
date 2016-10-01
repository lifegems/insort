import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Word, WordsService } from './words.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css'],
  providers: [WordsService]
})
export class GlossaryComponent implements OnInit {
  private words: Word[];
  private selectedWord: Word;

  constructor(private wordsService: WordsService) { }

  ngOnInit() {
    this.words = this.wordsService.listWords();
  }

  loadDefinition(word: Word) {
    this.selectedWord = word;
  }

}
