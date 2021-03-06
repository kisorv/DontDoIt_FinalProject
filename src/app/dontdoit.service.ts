import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DontdoitService {
  userScore: number = 0;
  questions: any;

  riskyMessage =
    "You have no respect for rules! You are next level crazy. You're a loose cannon and you live by the mantra: YOLO! ";
  normalMessage =
    "Go on an adventure. Conquer your fears. Take life's ups and downs. You know how to play it safe but you're still cool!";
  timidMessage =
    "Do you find yourself missing out on all the the fun? No stories to tell your grand kids? That's because you take life too seriously!";

  constructor(private http: HttpClient, private router: Router) {}

  getTopics(category: string) {
    return this.http.get(`${environment.api}/topics/${category}`);
  }

  getQuestions(category: string) {
    return this.http.get(`${environment.api}/quiz/${category}`);
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

  navigateToTopics() {
    this.router.navigate(["topics"]);
  }

  getGiphyData(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=no&limit=500&offset=0&rating=G&lang=en`
    );
  }

  getStickerData(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/stickers/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=no&limit=500&offset=0&rating=G&lang=en`
    );
  }

  getGiphyScaredData(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=nervous&limit=500&offset=0&rating=G&lang=en`
    );
  }

  getGiphyNormalData(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=cool&limit=500&offset=0&rating=G&lang=en`
    );
  }

  getGiphyCrazyData(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=crazy&limit=500&offset=0&rating=G&lang=en`
    );
  }

  getTextData(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/text/search?api_key=MAr6aY1f8bR1DAuAtoBGEGjRZ9pZxMcJ&q=no&limit=500&offset=0&rating=G&lang=en`
    );
  }
}
