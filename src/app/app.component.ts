import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Data } from "@angular/router";
import { tap } from "rxjs/operators";
import { Data } from "./data.model";
// import { Data } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test";
  id: string;
  name: string;

  private testData: Data[] = [
    new Data("la", "louisiana"),
    new Data("ny", "new york")
  ];

  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http
      .get<Data>("https://test-71306.firebaseio.com/test.json")
      .pipe(
        tap(data => {
          console.log(data);
          console.log(data.id);
          console.log(data.name);
          console.log("data is received");
        })
      )
      .subscribe(response => {
        console.log(Response);
      });
  }

  storeData() {
    this.http
      .put("https://test-71306.firebaseio.com/test.json", this.testData)
      .subscribe(response => {
        console.log(response);
      });
  }
}
