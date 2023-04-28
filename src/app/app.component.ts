import { Component } from '@angular/core';
import data from '../assets/data.json';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  angularCliCards = data.angularCliCards;
  databindingCards = data.databindingCards;
  directivesCards = data.directivesCards;
  lifecycleCards = data.lifecycleCards;
  decoratorsCards = data.decoratorsCards;
  pipesCards = data.decoratorsCards;
  routingCards = data.routingCards;
  materialCards = data.materialCards;

  tabs = [
    { title: 'Angular CLI', cards: this.angularCliCards },
    { title: 'Databinding', cards: this.databindingCards },
    { title: 'Directives', cards: this.directivesCards },
    { title: 'Lifecycle', cards: this.lifecycleCards },
    { title: 'Decorators', cards: this.decoratorsCards },
    { title: 'Pipes', cards: this.pipesCards },
    { title: 'Routing', cards: this.routingCards },
    { title: 'Matrial', cards: this.materialCards },
  ];
}
