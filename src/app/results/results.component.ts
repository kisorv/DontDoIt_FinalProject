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
  giphyScaredData: any;
  giphyNormalData: any;
  giphyCrazyData: any;

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
    if (this.loop === 1 && this.score < 4) {
      // setTimeout(this.indexFlow, this.delay);
      setInterval(this.indexFlow.bind(this), 10000);
   
      this.dontdoitService.getGiphyScaredData().subscribe(response => {
        console.log(response.data);
        
        this.giphyScaredData = response.data;
        
        console.log(this.giphyScaredData);
      });
  }
  else {
    if (this.loop === 1 && this.score >= 4 && this.score <= 7) {
      // setTimeout(this.indexFlow, this.delay);
      setInterval(this.indexFlow.bind(this), 10000);
   
      this.dontdoitService.getGiphyNormalData().subscribe(response => {
        console.log(response.data);
        
        this.giphyNormalData = response.data;
        
        console.log(this.giphyNormalData);
      });
  }
  
  else {
    if (this.loop === 1 && this.score > 7) {
      // setTimeout(this.indexFlow, this.delay);
      setInterval(this.indexFlow.bind(this), 10000);
   
      this.dontdoitService.getGiphyCrazyData().subscribe(response => {
        console.log(response.data);
        
        this.giphyCrazyData = response.data;
        
        console.log(this.giphyCrazyData);
      });
  }
  }

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


