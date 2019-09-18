import { Component, OnInit } from "@angular/core";
import { DontdoitService } from "../dontdoit.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loop: number = 1;
  index: number = Math.floor(Math.random() * 500);
  delay: number = 10000;
  giphyData: any;

  constructor(private dontDoitService: DontdoitService) {}

  indexFlow() {
    if (this.index === 500) {
      this.index -= 500;
    } else {
      this.index++;
    }
  }

  ngOnInit() {
    if (this.loop === 1) {
      setInterval(this.indexFlow.bind(this), 10000);

      this.dontDoitService.getGiphyData().subscribe(response => {
        this.giphyData = response.data;
      });
    }
  }
}
