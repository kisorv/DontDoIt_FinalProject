import { Component, OnInit } from "@angular/core";
import { DontdoitService } from "../dontdoit.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-quizQuestions",
  templateUrl: "./quizQuestions.component.html",
  styleUrls: ["./quizQuestions.component.css"]
})
export class QuizQuestionsComponent implements OnInit {
  questions: any;
  constructor(
    private dontdoitService: DontdoitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getQuestions(this.route.snapshot.paramMap.get("category"));
  }

  getQuestions(category: string) {
    this.dontdoitService.getQuestions(category).subscribe(response => {
      this.questions = response;
    });
  }
}
