import { Component, OnInit } from "@angular/core";
import { DontdoitService } from "../dontdoit.service";

@Component({
  selector: "app-wedding",
  templateUrl: "./wedding.component.html",
  styleUrls: ["./wedding.component.css"]
})
export class WeddingComponent implements OnInit {
  answers: any;
  constructor(private dontDoItService: DontdoitService) {}

  ngOnInit() {
    this.dontDoItService.getWeddingQuestions().subscribe(response => {
      this.answers = response;
    });
  }
}
