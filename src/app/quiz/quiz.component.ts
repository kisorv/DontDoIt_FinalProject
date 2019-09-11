import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DontdoitService } from '../dontdoit.service';
import { delay } from 'q';

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  loop: number = 1;
  index: number = Math.floor((Math.random() * 500));
  delay: number = 10000;
  stickerData: any;

  constructor(private dontDoitService: DontdoitService) { }


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
    if (this.loop === 1) {
      // setTimeout(this.indexFlow, this.delay);
      setInterval(this.indexFlow.bind(this), 10000);
   
      this.dontDoitService.getStickerData().subscribe(response => {
        console.log(response.data);
        
        this.stickerData = response.data;
        
        console.log(this.stickerData);
      });
  }

}}
