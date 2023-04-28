import { Component } from '@angular/core';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css'],
})
export class CardGeneratorComponent {
  card = {
    title: '',
    subtitle: '',
    code: [[{ text: '', style: '' }]],
  };

  JSONstring = '';

  onTitleInput(value: string) {
    this.card.title = value;
  }
  onSubtitleInput(value: string) {
    this.card.subtitle = value;
  }
  onElementInput(value: string, i: number, j: number) {
    this.card.code[i][j].text = value;
  }
  onRadioChange(value: string, i: number, j: number) {
    this.card.code[i][j].style = value;
  }
  onJSONstringInput(value: string) {
    this.JSONstring = value;
  }

  onNewCardClick() {
    this.card = {
      title: '',
      subtitle: '',
      code: [[{ text: '', style: '' }]],
    };
  }
  onImportClick() {
    try {
      this.card = JSON.parse(this.JSONstring);
    } catch (error) {}

    this.JSONstring = '';
  }

  onNewLineClick() {
    this.card.code.push([{ text: '', style: '' }]);
  }
  onRemoveLineClick(i: number) {
    this.card.code.splice(i, 1);
  }
  onNewElementClick(i: number) {
    this.card.code[i].push({ text: '', style: '' });
  }
  onRemoveElementClick(i: number, j: number) {
    this.card.code[i].splice(j, 1);
  }

  getJSONString() {
    return JSON.stringify(this.card);
  }
}
