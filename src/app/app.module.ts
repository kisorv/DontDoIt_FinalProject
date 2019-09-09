import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { WeddingComponent } from "./wedding/wedding.component";
import { FirstDateComponent } from "./first-date/first-date.component";
import { InterviewsComponent } from "./interviews/interviews.component";
import { TopicsComponent } from "./topics/topics.component";
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    FirstDateComponent,
    InterviewsComponent,
    TopicsComponent,
    QuizComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
