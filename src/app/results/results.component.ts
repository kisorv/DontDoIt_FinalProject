import { Component, OnInit } from "@angular/core";
import { DontdoitService } from "../dontdoit.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  score: number = 0;
  constructor(private dontdoitService: DontdoitService) {}

  ngOnInit() {
    this.score = this.dontdoitService.returnScore();
  }

  handleHomeClick() {
    this.dontdoitService.navigateToHome();
  }

  handleQuizClick() {
    this.dontdoitService.navigateToQuiz();
  }
}
