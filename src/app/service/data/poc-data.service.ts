import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Data } from "src/app/data.model";
// import { tap } from "rxjs/operators";
// import { Data } from "src/app/data.model";

@Injectable({
  providedIn: "root"
})
export class PocDataService {
  url: string = "http://ec2-54-221-108-81.compute-1.amazonaws.com:8080/";
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http.get<Data>(this.url + "ingredients");
  }

  storeData(data: Data) {
    this.http
      .post("http://localhost:8081/ingredients", data)
      .subscribe(response => {
        console.log(response);
      });
  }
}
