import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DontdoitService {
  userScore: number = 0;
  questions: any;

  riskyMessage = "You live by the mantra: YOLO!";
  normalMessage = "You like to play it safe but you're not lame.";
  timidMessage = "You take life too seriously.";

  constructor(private http: HttpClient, private router: Router) {}

  getTopics(category: string) {
    return this.http.get(`http://localhost:8080/topics/${category}`);
  }

  getQuestions(category: string) {
    return this.http.get(`http://localhost:8080/quiz/${category}`);
  }

  calculateScore(form: any, questions: any): any {
    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer1) {
        this.userScore++;
      }
    }
  }

  scoreResponse() {
    if (this.userScore > 7) {
      return this.riskyMessage;
    } else if (this.userScore <= 7 && this.userScore > 4) {
      return this.normalMessage;
    } else return this.timidMessage;
  }

  returnScore() {
    return this.userScore;
  }

  resetScore() {
    this.userScore = 0;
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

  getGiphyData(): Observable<any> {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=no&limit=500&offset=0&rating=G&lang=en`)

  }

  getStickerData(): Observable<any> {
    return this.http.get(`https://api.giphy.com/v1/stickers/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=no&limit=500&offset=0&rating=G&lang=en`)

  }

  getGiphyResultsData(): Observable<any> {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=crazy&limit=500&offset=0&rating=G&lang=en`)

  }

  getTextData(): Observable<any> {
    return this.http.get(`https://api.giphy.com/v1/text/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=no&limit=500&offset=0&rating=G&lang=en`)

  }


}
