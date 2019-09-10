import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class DontdoitService {
  userScore: number = 0;
  questions: any;
  submittedAnswers: any;
  quizQuestions: any;

  constructor(private http: HttpClient, private router: Router) {}

  getWeddingQuestions() {
    return this.http.get("http://localhost:8080/wedding");
  }

  getQuestions(category: string) {
    return this.http.get(`http://localhost:8080/quiz/${category}`);
  }

  calculateScore(form: any, questions: any): any {
    console.log(form, questions);
    this.submittedAnswers = form;
    this.quizQuestions = questions;

    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer1) {
        this.userScore++;
      }
    }
  }

  returnScore() {
    return this.userScore;
  }

  navigateToResults() {
    this.router.navigate(["results"]);
  }

  navigateToHome() {
    this.router.navigate(["home"]);
  }

  navigateToQuiz() {
    this.router.navigate(["quiz"]);
  }
}
