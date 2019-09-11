import { Component, OnInit } from '@angular/core';
import { DontdoitService } from '../dontdoit.service';
import { delay } from 'q';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  loop: number = 1;
  index: number = Math.floor((Math.random() * 500));
  delay: number = 10000;
  textData: any;

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
   
      this.dontDoitService.getTextData().subscribe(response => {
        console.log(response.data);
        
        this.textData = response.data;
        
        console.log(this.textData);
      });
  }

}}
