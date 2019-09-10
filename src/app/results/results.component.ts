import { Component, OnInit } from "@angular/core";
import { DontdoitService } from "../dontdoit.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  score: number = 0;
  message: string;

  constructor(private dontdoitService: DontdoitService) {}

  ngOnInit() {
    this.score = this.dontdoitService.returnScore();
    this.message = this.dontdoitService.scoreResponse();
    console.log(this.message);
  }

  handleHomeClick() {
    this.dontdoitService.navigateToHome();
  }

  handleQuizClick() {
    this.dontdoitService.navigateToQuiz();
  }

  resetUserScore() {
    this.dontdoitService.resetScore();
  }
}
