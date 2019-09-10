import { Component, OnInit } from "@angular/core";
import { DontdoitService } from "../dontdoit.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

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

  submitForm(form: NgForm) {
    this.dontdoitService.calculateScore(form.value, this.questions);
    console.log(form.value);
    form.reset();
  }
}
