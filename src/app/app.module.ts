import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TopicResponsesComponent } from "./topicResponses/topicResponses.component";
import { TopicsComponent } from "./topics/topics.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { DontdoitService } from "./dontdoit.service";
import { QuizComponent } from "./quiz/quiz.component";
import { QuizQuestionsComponent } from "./quizQuestions/quizQuestions.component";
import { FormsModule } from "@angular/forms";
import { ResultsComponent } from "./results/results.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "topics/:category", component: TopicResponsesComponent },
  { path: "topics", component: TopicsComponent },
  { path: "quiz", component: QuizComponent },
  { path: "quiz/:category", component: QuizQuestionsComponent },
  { path: "results", component: ResultsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    TopicResponsesComponent,
    TopicsComponent,
    HomeComponent,
    QuizComponent,
    QuizQuestionsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DontdoitService],
  bootstrap: [AppComponent]
})
export class AppModule {}
