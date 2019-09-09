import { Component, OnInit } from "@angular/core";
// import { NgForm } from "@angular/forms";
import { DontdoitService } from "../dontdoit.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;

  constructor(private dontdoitService: DontdoitService) {}

  ngOnInit() {
    this.dontdoitService.getDriversQuestions().subscribe(response => {
      this.questions = response;
    });
  }
}
