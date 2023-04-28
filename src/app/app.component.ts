import { Component, OnInit } from "@angular/core";
import { GetJsonService } from "./get-json.service";

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tabs: any;

  constructor(private getJsonService: GetJsonService) {}

  ngOnInit() {
    this.getJsonService.getData().subscribe((data: any) => {
      const angularCliCards = data.angularCliCards;
      const databindingCards = data.databindingCards;
      const directivesCards = data.directivesCards;
      const lifecycleCards = data.lifecycleCards;
      const decoratorsCards = data.decoratorsCards;
      const pipesCards = data.decoratorsCards;
      const routingCards = data.routingCards;
      const materialCards = data.materialCards;

      this.tabs = [
        { title: "Angular CLI", cards: angularCliCards },
        { title: "Databinding", cards: databindingCards },
        { title: "Directives", cards: directivesCards },
        { title: "Lifecycle", cards: lifecycleCards },
        { title: "Decorators", cards: decoratorsCards },
        { title: "Pipes", cards: pipesCards },
        { title: "Routing", cards: routingCards },
        { title: "Matrial", cards: materialCards },
      ];
    });
  }
  // https://raw.githubusercontent.com/xooxaa/AngularLib/main/src/assets/data.json
}
