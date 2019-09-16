import { Component, OnInit } from '@angular/core';
import { DontdoitService } from '../dontdoit.service';
import { delay } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    loop: number = 1;
  index: number = Math.floor((Math.random() * 500));
  delay: number = 10000;
  giphyData: any;

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
   
      this.dontDoitService.getGiphyData().subscribe(response => {
        console.log(response.data);
        
        this.giphyData = response.data;
        
        console.log(this.giphyData);
      });
  }

}}

