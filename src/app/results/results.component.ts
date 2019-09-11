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
  loop: number = 1;
  index: number = Math.floor((Math.random() * 500));
  delay: number = 10000;
  giphyResultsData: any;

  constructor(private dontdoitService: DontdoitService) {}

  indexFlow() {
    
    if (this.index === 500) {
      this.index -= 500;
      console.log(this.index);
  
    }
    else {
  
    
    this.index++;
    console.log(this.index);
    }
  }

  ngOnInit() {
    this.score = this.dontdoitService.returnScore();
    this.message = this.dontdoitService.scoreResponse();
    console.log(this.message);
    if (this.loop === 1) {
      // setTimeout(this.indexFlow, this.delay);
      setInterval(this.indexFlow.bind(this), 10000);
   
      this.dontdoitService.getGiphyResultsData().subscribe(response => {
        console.log(response.data);
        
        this.giphyResultsData = response.data;
        
        console.log(this.giphyResultsData);
      });
  }

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


