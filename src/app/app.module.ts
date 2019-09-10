import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { WeddingComponent } from "./wedding/wedding.component";
import { FirstDateComponent } from "./first-date/first-date.component";
import { InterviewsComponent } from "./interviews/interviews.component";
import { TopicsComponent } from "./topics/topics.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { DontdoitService } from "./dontdoit.service";
import { QuizComponent } from "./quiz/quiz.component";
import { QuizQuestionsComponent } from "./quizQuestions/quizQuestions.component";
import { NgForm } from "@angular/forms";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "wedding", component: WeddingComponent },
  { path: "interview", component: InterviewsComponent },
  { path: "firstdate", component: FirstDateComponent },
  { path: "topics", component: TopicsComponent },
  { path: "quiz", component: QuizComponent },
  { path: "quiz/:category", component: QuizQuestionsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    FirstDateComponent,
    InterviewsComponent,
    TopicsComponent,
    HomeComponent,
    QuizComponent,
    QuizQuestionsComponent,
    NgForm
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [DontdoitService],
  bootstrap: [AppComponent]
})
export class AppModule {}
