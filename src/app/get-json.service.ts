import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GetJsonService {
  constructor(private http: HttpClient) {}

  getData() {
    const url =
      "https://raw.githubusercontent.com/xooxaa/AngularLib/main/src/assets/data.json";
    return this.http.get(url);
  }
}
